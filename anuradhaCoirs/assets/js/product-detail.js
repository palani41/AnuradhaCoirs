/* ══════════════════════════════════════
           UTILITY
        ══════════════════════════════════════ */
        function cm(c) { return CAT_META[c] || { icon: 'bi-box-fill', color: '#8c6d35', bg: '#fdf6ec', desc: '' }; }
        function getProds() { return SEED.slice(); }
        function slug(s) { return String(s).toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''); }
        function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

        /* ══════════════════════════════════════
           TOAST SYSTEM
        ══════════════════════════════════════ */
        function showToast(msg, type = 'info', icon = 'bi-check-circle-fill') {
            const stack = document.getElementById('toastStack');
            const el = document.createElement('div');
            el.className = `toast-item ${type}`;
            el.innerHTML = `<i class="bi ${icon}"></i> ${msg}`;
            stack.appendChild(el);
            setTimeout(() => {
                el.classList.add('removing');
                setTimeout(() => el.remove(), 350);
            }, 3000);
        }

        /* ══════════════════════════════════════
           WISHLIST
        ══════════════════════════════════════ */
        let wishlist = JSON.parse(localStorage.getItem('ac_wishlist') || '[]');
        function toggleWish(id, btn) {
            const idx = wishlist.indexOf(id);
            if (idx === -1) {
                wishlist.push(id);
                btn.classList.add('active');
                showToast('Added to wishlist', 'success', 'bi-heart-fill');
            } else {
                wishlist.splice(idx, 1);
                btn.classList.remove('active');
                showToast('Removed from wishlist', 'info', 'bi-heart');
            }
            localStorage.setItem('ac_wishlist', JSON.stringify(wishlist));
        }

        /* ══════════════════════════════════════
           RECENTLY VIEWED
        ══════════════════════════════════════ */
        let recentlyViewed = JSON.parse(localStorage.getItem('ac_recently') || '[]');
        function addRecently(id) {
            recentlyViewed = recentlyViewed.filter(x => x !== id);
            recentlyViewed.unshift(id);
            if (recentlyViewed.length > 8) recentlyViewed = recentlyViewed.slice(0, 8);
            localStorage.setItem('ac_recently', JSON.stringify(recentlyViewed));
            renderRecently();
        }
        function renderRecently() {
            const sec = document.getElementById('recentlySection');
            const prods = recentlyViewed.map(id => SEED.find(p => p.id === id)).filter(Boolean);
            if (prods.length < 2) { sec.style.display = 'none'; return; }
            sec.style.display = 'block';
            sec.innerHTML = `<div class="recently-section">
    <div class="recently-title"><i class="bi bi-clock-history me-2" style="color:var(--gold)"></i>Recently Viewed</div>
    <div class="recently-grid">${prods.map(p => {
                const img = (p.images && p.images.length) ? p.images[0] : (p.image || 'assets/images/Products/coirfiberNew.jpeg');
                return `
      <div class="recently-item" onclick="openDetail('${esc(p.id)}')">
        <img src="${esc(img)}" alt="${esc(p.name)}" loading="lazy">
        <div class="recently-item-name">${esc(p.name)}</div>
      </div>`;
            }).join('')}
    </div>
  </div>`;
        }

        /* ══════════════════════════════════════
           CART STATE
        ══════════════════════════════════════ */
        let cart = JSON.parse(localStorage.getItem('ac_cart') || '[]'); // [{id, unit, amount}]

        window.addEventListener('storage', function (e) {
            if (e.key === 'ac_cart') {
                cart = JSON.parse(e.newValue || '[]');
                updateCartBadge();
                if (document.getElementById('cartDrawer') && document.getElementById('cartDrawer').classList.contains('open')) {
                    renderCartItems();
                }
            }
        });

        window.addEventListener('pageshow', function () {
            cart = JSON.parse(localStorage.getItem('ac_cart') || '[]');
            updateCartBadge();
        });

        function saveCart() {
            localStorage.setItem('ac_cart', JSON.stringify(cart));
        }

        function cartCount() { return cart.length; }
        function cartItemCount() { return cart.length; }

        function updateCartBadge() {
            const cnt = cartCount();

            const navBadge = document.getElementById('navCartBadge');
            if (navBadge) navBadge.textContent = cnt;

            const headCount = document.getElementById('cartHeadCount');
            if (headCount) headCount.textContent = cnt;

            const scbCount = document.getElementById('scbCount');
            if (scbCount) scbCount.textContent = cnt;

            // Sticky bar
            const bar = document.getElementById('stickyCartBar');
            if (bar && window.innerWidth <= 767) {
                bar.style.display = cnt > 0 ? 'flex' : 'none';
            }
        }

        function addToCart(id, amount = 100) {
            cart = JSON.parse(localStorage.getItem('ac_cart') || '[]');
            const existing = cart.find(i => i.id === id);
            if (existing) {
                existing.amount += amount;
                showToast('Quantity updated in cart', 'success', 'bi-cart-check-fill');
            } else {
                cart.push({ id, unit: 'Pieces', amount: amount });
                showToast('Added to enquiry cart!', 'success', 'bi-cart-plus-fill');
            }
            saveCart();
            // Badge pop animation
            const badge = document.getElementById('navCartBadge');
            if (badge) {
                badge.classList.remove('pop');
                void badge.offsetWidth;
                badge.classList.add('pop');
            }
            updateCartBadge();
            renderCartItems();
        }

        function removeFromCart(id) {
            cart = JSON.parse(localStorage.getItem('ac_cart') || '[]');
            cart = cart.filter(i => i.id !== id);
            saveCart();
            updateCartBadge();
            renderCartItems();
            showToast('Item removed from cart', 'info', 'bi-trash');
        }

        function changeCartUnit(id, unit) {
            cart = JSON.parse(localStorage.getItem('ac_cart') || '[]');
            const item = cart.find(i => i.id === id);
            if (!item) return;
            item.unit = unit;

            // Set reasonable default amounts based on selected unit
            if (unit === 'Ton') {
                item.amount = 10;
            } else if (unit === 'Kg') {
                item.amount = 500;
            } else {
                item.amount = 100;
            }
            saveCart();
            renderCartItems();
            updateCartBadge();
        }

        function updateCartAmount(id, deltaSign) {
            cart = JSON.parse(localStorage.getItem('ac_cart') || '[]');
            const item = cart.find(i => i.id === id);
            if (!item) return;
            let delta = 1;
            if (item.unit === 'Kg') {
                delta = 50;
            } else if (item.unit === 'Pieces') {
                delta = 10;
            }
            item.amount = Math.max(1, item.amount + (deltaSign * delta));
            saveCart();
            renderCartItems();
            updateCartBadge();
        }

        function setCartAmount(id, val) {
            cart = JSON.parse(localStorage.getItem('ac_cart') || '[]');
            const item = cart.find(i => i.id === id);
            if (!item) return;
            const parsed = parseInt(val);
            if (!isNaN(parsed) && parsed > 0) {
                item.amount = parsed;
            }
            saveCart();
            renderCartItems();
            updateCartBadge();
        }

        function renderCartItems() {
            const wrap = document.getElementById('cartItemsWrap');
            const footer = document.getElementById('cartFooter');

            if (cart.length === 0) {
                wrap.innerHTML = `<div class="cart-empty">
      <i class="bi bi-cart-x"></i>
      <h5>Your cart is empty</h5>
      <p>Add products to your enquiry cart and place an order via WhatsApp</p>
    </div>`;
                footer.style.display = 'none';
                return;
            }

            footer.style.display = 'block';
            let html = '';
            cart.forEach(item => {
                const p = SEED.find(x => x.id === item.id);
                if (!p) return;
                const img = (p.images && p.images.length) ? p.images[0] : (p.image || 'assets/images/Products/coirfiberNew.jpeg');
                html += `<div class="cart-item">
      <img src="${esc(img)}" alt="${esc(p.name)}" class="cart-item-img" loading="lazy">
      <div class="cart-item-info">
        <div class="cart-item-cat">${esc(p.category)}</div>
        <div class="cart-item-name">${esc(p.name)}</div>
        <div class="cart-item-code">${esc(p.code)}</div>
        <div class="cart-item-actions" style="display:flex;align-items:center;gap:6px;margin-top:8px;flex-wrap:wrap;">
          <select class="cart-unit-select" onchange="changeCartUnit('${p.id}', this.value)">
            <option value="Pieces" ${item.unit === 'Pieces' ? 'selected' : ''}>Pieces</option>
            <option value="Kg" ${item.unit === 'Kg' ? 'selected' : ''}>Kg</option>
            <option value="Ton" ${item.unit === 'Ton' ? 'selected' : ''}>Ton</option>
          </select>
          <div class="cart-qty-ctrl" style="display:flex;align-items:center;border:1.5px solid var(--border);border-radius:4px;overflow:hidden;">
            <button onclick="updateCartAmount('${p.id}',-1)" style="width:24px;height:24px;border:none;background:var(--cream2);cursor:pointer;display:flex;align-items:center;justify-content:center;"><i class="bi bi-dash"></i></button>
            <input type="number" value="${item.amount}" onchange="setCartAmount('${p.id}',this.value)" style="width:55px;text-align:center;border:none;outline:none;font-family:var(--fb);font-weight:700;font-size:.85rem;background:#fff;height:24px;padding:0;">
            <button onclick="updateCartAmount('${p.id}',1)" style="width:24px;height:24px;border:none;background:var(--cream2);cursor:pointer;display:flex;align-items:center;justify-content:center;"><i class="bi bi-plus"></i></button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart('${p.id}')" title="Remove" style="margin-left:auto;background:none;border:none;color:var(--text-muted);cursor:pointer;transition:var(--tr);"><i class="bi bi-trash"></i></button>
        </div>
      </div>
    </div>`;
            });

            wrap.innerHTML = html;

            // Update summary rows
            document.getElementById('cartTotalItems').textContent = cartItemCount();
        }

        function openCart() {
            cart = JSON.parse(localStorage.getItem('ac_cart') || '[]');
            renderCartItems();
            document.getElementById('cartDrawer').classList.add('open');
            document.getElementById('cartOverlay').classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeCart() {
            document.getElementById('cartDrawer').classList.remove('open');
            document.getElementById('cartOverlay').classList.remove('open');
            document.body.style.overflow = '';
        }

        document.getElementById('cartClose').addEventListener('click', closeCart);
        document.getElementById('cartOverlay').addEventListener('click', closeCart);
        document.getElementById('btnContinueShopping').addEventListener('click', closeCart);

        /* WhatsApp quick send from cart */
        document.getElementById('cartWaCta').addEventListener('click', function () {
            if (cart.length === 0) { showToast('Cart is empty', 'info', 'bi-cart-x'); return; }
            const lines = cart.map(item => {
                const p = SEED.find(x => x.id === item.id);
                return `• ${p.name} (${p.code}) — ${item.amount} ${item.unit}`;
            }).join('%0A');
            const msg = `Hello! I'm interested in the following products from Anuradha Coirs & Fibers:%0A%0A${lines}%0A%0APlease send me pricing and availability.`;
            window.open(`https://wa.me/919361315289?text=${msg}`, '_blank');
        });

        /* Place Order button */
        document.getElementById('btnPlaceOrder').addEventListener('click', function () {
            if (cart.length === 0) { showToast('Cart is empty', 'info', 'bi-cart-x'); return; }
            closeCart();
            openOrderModal();
        });

        /* ══════════════════════════════════════
           ORDER MODAL
        ══════════════════════════════════════ */
        function openOrderModal() {
            // Restore default view (form and footer)
            const formView = document.getElementById('orderModalFormView');
            const successView = document.getElementById('orderModalSuccessView');
            const modalFooter = document.querySelector('.order-modal .modal-footer');
            if (formView) formView.style.display = '';
            if (successView) successView.style.display = 'none';
            if (modalFooter) modalFooter.style.display = '';

            renderOrderSummary();
            new bootstrap.Modal(document.getElementById('orderModal')).show();
        }

        function renderOrderSummary() {
            const itemsEl = document.getElementById('osSummaryItems');
            const totalsEl = document.getElementById('osTotals');

            let itemsHtml = '';
            cart.forEach(item => {
                const p = SEED.find(x => x.id === item.id);
                if (!p) return;
                const img = (p.images && p.images.length) ? p.images[0] : (p.image || 'assets/images/Products/coirfiberNew.jpeg');
                itemsHtml += `<div class="os-item">
      <img src="${esc(img)}" alt="${esc(p.name)}" class="os-item-img" loading="lazy">
      <div class="os-item-info">
        <div class="os-item-name">${esc(p.name)}</div>
        <div class="os-item-qty">Code: ${esc(p.code)} &nbsp;|&nbsp; ${item.amount} ${item.unit}</div>
      </div>
    </div>`;
            });

            totalsEl.innerHTML = `
    <div class="os-total-row"><span>Total Products</span><span>${cartItemCount()}</span></div>
    <div class="os-total-row grand"><span>Enquiry Status</span><span style="color:var(--green);font-size:.82rem;">Ready to Send</span></div>
    <p style="font-size:.7rem;color:var(--text-light);margin-top:10px;line-height:1.5;">Pricing will be quoted after we review your requirements. All exports are subject to current availability and shipping terms.</p>
  `;

            itemsEl.innerHTML = itemsHtml;
        }

        function validateOrderForm() {
            const required = ['of-name', 'of-mobile', 'of-whatsapp', 'of-email', 'of-country', 'of-state', 'of-city', 'of-zip', 'of-address'];
            let valid = true;
            required.forEach(id => {
                const el = document.getElementById(id);
                if (!el.value.trim()) {
                    el.style.borderColor = 'var(--red)';
                    el.style.boxShadow = '0 0 0 3px rgba(229,57,53,.1)';
                    valid = false;
                } else {
                    el.style.borderColor = '';
                    el.style.boxShadow = '';
                }
            });
            return valid;
        }

        function submitOrder() {
            if (!validateOrderForm()) {
                showToast('Please fill in all required fields', 'info', 'bi-exclamation-circle-fill');
                return;
            }

            const name = document.getElementById('of-name').value.trim();
            const company = document.getElementById('of-company').value.trim();
            const mobile = document.getElementById('of-mobile').value.trim();
            const whatsapp = document.getElementById('of-whatsapp').value.trim();
            const email = document.getElementById('of-email').value.trim();
            const country = document.getElementById('of-country').value.trim();
            const state = document.getElementById('of-state').value.trim();
            const city = document.getElementById('of-city').value.trim();
            const zip = document.getElementById('of-zip').value.trim();
            const address = document.getElementById('of-address').value.trim();
            const notes = document.getElementById('of-notes').value.trim();

            // Build WhatsApp message
            let productLines = '';
            cart.forEach((item, idx) => {
                const p = SEED.find(x => x.id === item.id);
                if (p) productLines += `\n${idx + 1}. ${p.name} (${p.code}) — ${item.amount} ${item.unit}`;
            });

            const msg = `🌿 *NEW PRODUCT ENQUIRY — ANURADHA COIRS & FIBERS*\n\n`
                + `👤 *Customer Details:*\n`
                + `Name: ${name}\n`
                + (company ? `Company: ${company}\n` : '')
                + `Mobile: ${mobile}\n`
                + `WhatsApp: ${whatsapp}\n`
                + `Email: ${email}\n\n`
                + `📍 *Shipping Address:*\n`
                + `${address}, ${city}, ${state} ${zip}\n`
                + `Country: ${country}\n\n`
                + `🛒 *Ordered Products:*${productLines}\n\n`
                + `📦 *Total Products:* ${cartItemCount()}\n\n`
                + (notes ? `📝 *Notes:* ${notes}\n\n` : '')
                + `Please confirm availability and share pricing. Thank you!`;

            const encoded = encodeURIComponent(msg);
            const waURL = `https://wa.me/919361315289?text=${encoded}`;

            // Show success state inside modal by toggling visibility
            const formView = document.getElementById('orderModalFormView');
            const successView = document.getElementById('orderModalSuccessView');
            const modalFooter = document.querySelector('.order-modal .modal-footer');
            if (formView) formView.style.display = 'none';
            if (modalFooter) modalFooter.style.display = 'none';
            if (successView) {
                successView.style.display = 'block';
                successView.innerHTML = `<div class="order-success">
    <div class="success-icon"><i class="bi bi-check-lg"></i></div>
    <h4>Order Ready to Send!</h4>
    <p>Your enquiry has been prepared. Click below to open WhatsApp and send it directly to our team.</p>
    <a href="${waURL}" target="_blank" class="btn-wa-redirect" onclick="finalizeOrder()">
      <i class="bi bi-whatsapp" style="font-size:1.1rem;"></i>
      Open WhatsApp & Send Order
    </a>
    <p style="margin-top:16px;font-size:.78rem;color:var(--text-light);">
      Our team will respond within 24 hours with pricing and availability.
    </p>
  </div>`;
            }
        }

        function finalizeOrder() {
            cart = [];
            saveCart();
            updateCartBadge();
            renderCartItems();
            showToast('Order sent! Our team will contact you soon.', 'success', 'bi-whatsapp');

            // Hide the modal after redirecting
            const modalEl = document.getElementById('orderModal');
            const modalInstance = bootstrap.Modal.getInstance(modalEl);
            if (modalInstance) {
                modalInstance.hide();
            }
        }

        /* ══════════════════════════════════════
           PRODUCT SHARE
        ══════════════════════════════════════ */
        function shareProduct(name, code) {
            const text = `Check out ${name} (${code}) from Anuradha Coirs & Fibers! Premium export-quality coir products.`;
            if (navigator.share) {
                navigator.share({ title: name, text: text, url: window.location.href });
            } else {
                const wa = `https://wa.me/?text=${encodeURIComponent(text + ' ' + window.location.href)}`;
                window.open(wa, '_blank');
            }
        }

        /* ══════════════════════════════════════
           PRODUCT DETAIL RENDERER
        ══════════════════════════════════════ */
        let activeProduct = null;

        function loadProductDetail() {
            const params = new URLSearchParams(window.location.search);
            const id = params.get('id');
            if (!id) {
                showProductError("No Product Specified");
                return;
            }

            const p = SEED.find(x => x.id === id);
            if (!p) {
                showProductError("Product Not Found");
                return;
            }

            activeProduct = p;
            addRecently(p.id);

            // Update Breadcrumbs
            $('#detailBreadcrumb').html(`
                <li class="breadcrumb-item"><a href="index.html"><i class="bi bi-house-fill me-1"></i>Home</a></li>
                <li class="breadcrumb-item"><a href="product.html">Products</a></li>
                <li class="breadcrumb-item"><a href="product.html?category=${encodeURIComponent(p.category)}">${esc(p.category)}</a></li>
                <li class="breadcrumb-item active" aria-current="page">${esc(p.name)}</li>
            `);

            // Update Page Hero text
            $('.page-hero h1').html(`${esc(p.name)}`);
            $('.page-hero p').html(`Product Code: ${esc(p.code)} &bull; Category: ${esc(p.category)}`);

            // Populate Specs
            function getSpecIcon(label) {
                const lbl = label.toLowerCase();
                if (lbl.includes('size')) return 'bi-arrows-angle-expand';
                if (lbl.includes('weight')) return 'bi-box-seam';
                if (lbl.includes('expansion')) return 'bi-droplet-half';
                if (lbl.includes('ec value') || lbl.includes('ec')) return 'bi-lightning-charge-fill';
                if (lbl.includes('ph value') || lbl.includes('ph')) return 'bi-water';
                if (lbl.includes('moisture')) return 'bi-thermometer-half';
                if (lbl.includes('compression')) return 'bi-align-center';
                if (lbl.includes('length')) return 'bi-rulers';
                if (lbl.includes('impurities')) return 'bi-filter-circle';
                if (lbl.includes('colour') || lbl.includes('color')) return 'bi-palette';
                if (lbl.includes('loadability')) return 'bi-truck';
                return 'bi-check-circle-fill';
            }
            const specsHTML = (p.specs || []).map((r, idx) => `
                <div class="spec-mini-card reveal-on-scroll delay-${idx + 1}">
                    <span class="spec-mini-card-icon"><i class="bi ${getSpecIcon(r[0])}"></i></span>
                    <div class="spec-mini-card-label">${esc(r[0])}</div>
                    <div class="spec-mini-card-value">${esc(r[1])}</div>
                </div>
            `).join('');
            const highlightsHTML = (p.highlights || []).length > 0
                ? `<ul class="highlight-list">${p.highlights.map(h => `<li><i class="bi bi-patch-check-fill"></i><span>${esc(h)}</span></li>`).join('')}</ul>`
                : '';
            const pills = (p.pills || []).map(t => `<span class="dm-pill">${esc(t)}</span>`).join('');
            const ruleHTML = `<div class="dm-rule"><div class="dm-rule-line"></div><span class="dm-rule-ornament">&#9670;&nbsp;&#9670;&nbsp;&#9670;</span><div class="dm-rule-line"></div></div>`;
            const imgs = (p.images && p.images.length) ? p.images : [p.image || 'assets/images/Products/coirfiberNew.jpeg'];
            const img = imgs[0];
            const thumbRow = imgs.length > 1 ? `<div class="dm-thumb-row">${imgs.map((src, i) =>
                `<img src="${esc(src)}" class="dm-thumb${i === 0 ? ' active' : ''}" onclick="switchDetailImg('${esc(src)}', this)" loading="lazy">`
            ).join('')}</div>` : '';
            const bm = BADGE_META[p.badge] || (p.isNew ? BADGE_META['new'] : null);
            const badge = bm ? `<span class="pc-badge ${bm.cls}" style="position:relative;top:0;left:0;">${bm.lbl}</span>` : '';
            const isWishlisted = wishlist.includes(p.id);

            // Render details
            $('#productDetailCard').html(`
                <div class="dm-layout page-mode">
                    <div class="dm-img-col">
                        <div class="dm-img-main-container" id="dmImgContainer" onmousemove="zoomMainImg(event)" onmouseleave="resetZoomMainImg()">
                            <img src="${esc(img)}" alt="${esc(p.name)}" class="dm-img-main" id="dmMainImg" loading="lazy">
                        </div>
                        ${thumbRow}
                        <div class="dm-img-meta">
                            <span class="dm-code">${esc(p.code)}</span>
                            <div class="dm-share-row">
                                <button class="dm-share-btn" onclick="shareProduct('${esc(p.name)}','${esc(p.code)}')" title="Share"><i class="bi bi-share-fill"></i></button>
                                <button class="dm-share-btn" onclick="window.open('https://wa.me/919361315289?text=${encodeURIComponent('Hi! I am interested in ' + p.name + ' (' + p.code + '). Please send me more details.')}','_blank')" title="WhatsApp"><i class="bi bi-whatsapp"></i></button>
                                <button class="dm-share-btn pc-wish${isWishlisted ? ' active' : ''}" data-id="${esc(p.id)}" onclick="toggleWishDetail('${esc(p.id)}',this)" title="Wishlist"><i class="bi bi-heart${isWishlisted ? '-fill' : ''}"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="dm-info-col">
                        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                            <span class="dm-cat-tag">${esc(p.category)}</span>${badge}
                        </div>
                        <h4 class="dm-name" style="font-size: 2.2rem;">${esc(p.name)}</h4>
                        ${ruleHTML}
                        <p class="dm-desc">${esc(p.description)}</p>
                        ${highlightsHTML}
                        <div class="dm-pills">${pills}</div>
                        ${specsHTML ? `<div class="dm-spec-title" style="margin-top: 15px;">Technical Specifications</div>
                        <div class="spec-card-grid">${specsHTML}</div>` : ''}
                        
                        <div class="dm-qty-row mt-4" style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
                            <div style="display:flex;flex-direction:column;gap:4px;">
                                <span class="dm-qty-label" style="margin:0;">Select Unit</span>
                                <select class="dm-unit-select" id="detailUnitSelect" onchange="onDetailUnitChange()">
                                    <option value="Pieces">Pieces</option>
                                    <option value="Kg">Kg</option>
                                    <option value="Ton">Ton</option>
                                </select>
                            </div>
                            <div style="display:flex;flex-direction:column;gap:4px;">
                                <span class="dm-qty-label" style="margin:0;">Quantity</span>
                                <div class="dm-qty-ctrl">
                                    <button onclick="detQtyChange(-1)"><i class="bi bi-dash"></i></button>
                                    <input type="number" id="detQtyInput" value="100" min="1" max="999999">
                                    <button onclick="detQtyChange(1)"><i class="bi bi-plus"></i></button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="dm-actions">
                            <button class="dm-btn-cart" onclick="addToCartFromDetailPage('${esc(p.id)}')"><i class="bi bi-cart-plus-fill"></i> Add to Enquiry Cart</button>
                            <a href="contact.html?product=${encodeURIComponent(p.name)}" class="dm-btn-q"><i class="bi bi-send-fill"></i> Request Quote</a>
                            <button class="dm-btn-back" onclick="goBack()" title="Back"><i class="bi bi-arrow-left"></i></button>
                        </div>
                    </div>
                </div>
            `);

            renderRelatedProducts(p);
            renderUsesAndApplications(p);
        }

        function renderUsesAndApplications(p) {
            // Render Uses
            if (p.uses && p.uses.length > 0) {
                const mainUseImg = p.uses[0].image || 'assets/images/Products/coirfiberNew.jpeg';
                let usesHTML = `
                    <h2 class="info-heading reveal-on-scroll">What is the use of this product?</h2>
                    <p class="info-subheading reveal-on-scroll">Discover the key benefits and primary functions</p>
                    <div class="info-row reveal-on-scroll">
                        <div class="info-media-col">
                            <div class="info-media-wrapper">
                                <img src="${esc(mainUseImg)}" alt="What is the use of ${esc(p.name)}" class="info-media-img" loading="lazy">
                            </div>
                        </div>
                        <div class="info-content-col">
                `;
                p.uses.forEach((item, idx) => {
                    usesHTML += `
                        <div class="info-list-item reveal-on-scroll delay-${idx + 1}">
                            <span class="info-list-icon"><i class="bi ${esc(item.icon)}"></i></span>
                            <div class="info-list-text">
                                <h4 class="info-list-title">${esc(item.title)}</h4>
                                <p class="info-list-desc">${esc(item.desc)}</p>
                            </div>
                        </div>
                    `;
                });
                usesHTML += `
                        </div>
                    </div>
                `;
                $('#productUsesSection').html(usesHTML).show();
            } else {
                $('#productUsesSection').hide().empty();
            }

            // Render Where Used (Row-Reversed)
            if (p.whereUsed && p.whereUsed.length > 0) {
                const mainWhereUsedImg = p.whereUsed[0].image || 'assets/images/Products/coirfiberNew.jpeg';
                let whereUsedHTML = `
                    <h2 class="info-heading reveal-on-scroll">Where is it used?</h2>
                    <p class="info-subheading reveal-on-scroll">Target industries and professional environments</p>
                    <div class="info-row row-reversed reveal-on-scroll">
                        <div class="info-media-col">
                            <div class="info-media-wrapper">
                                <img src="${esc(mainWhereUsedImg)}" alt="Where ${esc(p.name)} is used" class="info-media-img" loading="lazy">
                            </div>
                        </div>
                        <div class="info-content-col">
                `;
                p.whereUsed.forEach((item, idx) => {
                    whereUsedHTML += `
                        <div class="info-list-item reveal-on-scroll delay-${idx + 1}">
                            <span class="info-list-icon"><i class="bi ${esc(item.icon)}"></i></span>
                            <div class="info-list-text">
                                <h4 class="info-list-title">${esc(item.title)}</h4>
                                <p class="info-list-desc">${esc(item.desc)}</p>
                            </div>
                        </div>
                    `;
                });
                whereUsedHTML += `
                        </div>
                    </div>
                `;
                $('#productWhereUsedSection').html(whereUsedHTML).show();
            } else {
                $('#productWhereUsedSection').hide().empty();
            }

            // Render Crops
            if (p.crops && p.crops.length > 0) {
                let cropsHTML = `
                    <div class="crops-section reveal-on-scroll">
                        <h3 class="crops-title">Perfect For These Crops</h3>
                        <p class="crops-subtitle">Proven to maximize growth yield for these varieties</p>
                        <div class="crops-container">
                `;
                p.crops.forEach(crop => {
                    cropsHTML += `
                        <span class="crop-badge">
                            <i class="bi bi-patch-check-fill"></i> ${esc(crop)}
                        </span>
                    `;
                });
                cropsHTML += `
                        </div>
                    </div>
                `;
                $('#productCropsSection').html(cropsHTML).show();
            } else {
                $('#productCropsSection').hide().empty();
            }

            // Render Reviews
            if (p.reviews && p.reviews.length > 0) {
                let reviewsHTML = `
                    <h2 class="info-heading reveal-on-scroll">Customer Reviews</h2>
                    <p class="info-subheading reveal-on-scroll">Simple & modern feedback from our global buyers</p>
                    <div class="reviews-grid reveal-on-scroll">
                `;
                p.reviews.forEach((rev, idx) => {
                    const initials = rev.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
                    reviewsHTML += `
                        <div class="review-card reveal-on-scroll delay-${idx + 1}">
                            <div class="review-stars">
                                ${'<i class="bi bi-star-fill"></i>'.repeat(rev.rating)}
                                ${'<i class="bi bi-star"></i>'.repeat(5 - rev.rating)}
                            </div>
                            <p class="review-comment">"${esc(rev.comment)}"</p>
                            <div class="review-author">
                                <div class="review-avatar">${esc(initials)}</div>
                                <div class="review-meta">
                                    <h4 class="review-name">${esc(rev.name)}</h4>
                                    <p class="review-location"><i class="bi bi-geo-alt-fill"></i> ${esc(rev.location)}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
                reviewsHTML += `
                    </div>
                `;
                $('#productReviewsSection').html(reviewsHTML).show();
            } else {
                $('#productReviewsSection').hide().empty();
            }

            // Set up scroll animations via IntersectionObserver
            setupScrollAnimations();
        }

        function setupScrollAnimations() {
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('revealed');
                            // Once revealed, we can unobserve
                            observer.unobserve(entry.target);
                        }
                    });
                }, {
                    threshold: 0.15,
                    rootMargin: '0px 0px -50px 0px'
                });

                document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                    observer.observe(el);
                });
            } else {
                // Fallback if IntersectionObserver not supported
                document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                    el.classList.add('revealed');
                });
            }
        }

        function toggleWishDetail(id, btn) {
            toggleWish(id, btn);
            // Sync heart icon display inside detail card
            const icon = btn.querySelector('i');
            const isWishlisted = wishlist.includes(id);
            if (isWishlisted) {
                icon.className = 'bi bi-heart-fill';
            } else {
                icon.className = 'bi bi-heart';
            }
        }

        function onDetailUnitChange() {
            const unit = document.getElementById('detailUnitSelect').value;
            const el = document.getElementById('detQtyInput');
            if (unit === 'Ton') {
                el.value = 10;
            } else if (unit === 'Kg') {
                el.value = 500;
            } else {
                el.value = 100;
            }
        }

        function detQtyChange(d) {
            const unit = document.getElementById('detailUnitSelect')?.value || 'Pieces';
            const el = document.getElementById('detQtyInput');
            if (!el) return;
            let step = 10;
            if (unit === 'Kg') step = 50;
            else if (unit === 'Ton') step = 1;
            el.value = Math.max(1, parseInt(el.value || 100) + d * step);
        }

        function addToCartFromDetailPage(id) {
            const qty = parseInt(document.getElementById('detQtyInput')?.value || 100);
            const unit = document.getElementById('detailUnitSelect')?.value || 'Pieces';

            // Add to cart with specific unit
            const existing = cart.find(i => i.id === id);
            if (existing) {
                existing.amount += qty;
                existing.unit = unit; // update unit
                showToast('Quantity updated in cart', 'success', 'bi-cart-check-fill');
            } else {
                cart.push({ id, unit: unit, amount: qty });
                showToast('Added to enquiry cart!', 'success', 'bi-cart-plus-fill');
            }
            saveCart();
            updateCartBadge();
            renderCartItems();

            setTimeout(openCart, 400);
        }

        function switchDetailImg(src, el) {
            const mainImg = document.getElementById('dmMainImg');
            if (mainImg) {
                // Apply a smooth fade out transition
                mainImg.style.opacity = 0.3;
                setTimeout(() => {
                    mainImg.src = src;
                    mainImg.style.opacity = 1;
                }, 150);
            }
            document.querySelectorAll('.dm-thumb').forEach(t => t.classList.remove('active'));
            el.classList.add('active');
        }

        function zoomMainImg(e) {
            const container = e.currentTarget;
            const img = container.querySelector('img');
            const rect = container.getBoundingClientRect();

            // Calculate coordinates in percentages
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            img.style.transformOrigin = `${x}% ${y}%`;
            img.style.transform = 'scale(1.8)';
        }

        function resetZoomMainImg() {
            const img = document.getElementById('dmMainImg');
            if (img) {
                img.style.transform = 'scale(1)';
                img.style.transformOrigin = 'center center';
            }
        }

        function showProductError(message) {
            $('#productDetailCard').html(`
                <div class="text-center py-5">
                    <i class="bi bi-exclamation-triangle" style="font-size: 3.5rem; color: var(--gold);"></i>
                    <h3 class="mt-3" style="font-family: var(--fh);">${esc(message)}</h3>
                    <p style="color: var(--text-muted);">Please go back to the products catalog page to browse our items.</p>
                    <a href="product.html" class="btn-primary-coir mt-3 px-4 py-2 d-inline-flex align-items-center gap-2" style="background: var(--forest); color: #fff; border-radius: 4px; padding: 10px 20px; text-decoration: none;">
                        <i class="bi bi-arrow-left"></i> Back to Products
                    </a>
                </div>
            `);
            $('#relatedSection').hide();
        }

        function goBack() {
            if (document.referrer.indexOf(window.location.host) !== -1) {
                window.history.back();
            } else {
                window.location.href = 'product.html';
            }
        }

        function renderRelatedProducts(currProd) {
            const all = getProds();
            // Get products in same category except current one
            const related = all.filter(p => p.category === currProd.category && p.id !== currProd.id).slice(0, 3);
            if (related.length === 0) {
                $('#relatedSection').hide();
                return;
            }

            $('#relatedSection').show();

            // Generate cards
            const gridHTML = related.map(p => {
                const isWishlisted = wishlist.includes(p.id);
                const bm = BADGE_META[p.badge] || (p.isNew ? BADGE_META['new'] : null);
                const badge = bm ? `<span class="pc-badge ${bm.cls}">${bm.lbl}</span>` : '';
                const imgs = (p.images && p.images.length) ? p.images : [p.image || 'assets/images/Products/coirfiberNew.jpeg'];
                const img = imgs[0];

                return `
                    <div class="prod-card" data-id="${esc(p.id)}" onclick="window.location.href='product-detail.html?id=${p.id}'" style="cursor: pointer;">
                        <div class="pc-img-wrap">
                            <img src="${esc(img)}" alt="${esc(p.name)}" class="pc-img" loading="lazy">
                            ${badge}
                            <button class="pc-wish${isWishlisted ? ' active' : ''}" onclick="event.stopPropagation();toggleWish('${esc(p.id)}',this)">
                                <i class="bi bi-heart${isWishlisted ? '-fill' : ''}"></i>
                            </button>
                        </div>
                        <div class="pc-body">
                            <span class="pc-cat-tag">${esc(p.category)}</span>
                            <div class="pc-name">${esc(p.name)}</div>
                            <div class="pc-desc" style="font-size: .82rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 38px; margin-top: 5px;">${esc(p.description)}</div>
                            <div class="pc-actions" style="margin-top: 15px;">
                                <button class="btn-add-cart" onclick="event.stopPropagation();addToCart('${esc(p.id)}',100);setTimeout(openCart,400);" style="flex:1;"><i class="bi bi-cart-plus"></i> Add to Cart</button>
                                <button class="btn-details" onclick="event.stopPropagation();window.location.href='product-detail.html?id=${p.id}'"><i class="bi bi-eye-fill"></i></button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            $('#relatedInner').html(gridHTML);
        }

        /* ══════════════════════════════════════
           BOOT
        ══════════════════════════════════════ */
        $('#footer-year').text(new Date().getFullYear());
        updateCartBadge();
        loadProductDetail();
