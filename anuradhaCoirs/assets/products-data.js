/* ══════════════════════════════════════
   PRODUCT DATA (SHARED WITH EXTENDED META AND HIGHLIGHTS)
   Includes dynamic modern reviews and suitable crops for all varieties.
   ══════════════════════════════════════ */
const SEED = [
    {
        id: 'p001', code: 'AC-01', name: 'Coir Fibre', category: 'Coir Fibre',
        badge: 'export', // 'new' | 'bestseller' | 'premium' | 'export'
        images: [
            'assets/images/Products/coirfiberNew.jpeg',
            'assets/images/Products/brownCoir.jpeg',
            'assets/images/Products/whiteCoirFibre.jpeg',
            'assets/images/Products/coirfiberNew2.jpeg',
            'assets/images/Products/coirfiberNew3.jpeg',
            'assets/images/Products/coirfiberNew4.jpeg',
            'assets/images/Products/coirfiberNew5.jpeg',
        ],
        description: 'Premium natural coir fibre extracted from matured coconut husks. Processed using advanced cleaning and drying methods for superior quality. Widely used in mattresses, geo textiles, ropes, brushes, and erosion control products.',
        pills: ['High Tensile Strength', 'Eco-Friendly', 'Hydraulic Baled', 'Low Moisture', 'Export Certified'],
        highlights: [
            '100% natural, biodegradable organic material',
            'High resilience and excellent durability under tension',
            'Naturally resistant to fungal growth and saltwater decay',
            'Compressed into heavy bales for cost-effective freight space'
        ],
        specs: [['Bale Size', '115 × 65 × 45 cm'], ['Weight', '110 – 125 kg'], ['Fibre Length', '5 – 25 cm'], ['Moisture', 'Below 15%'], ['Impurities', 'Below 3%'], ['Colour', 'Golden Brown'], ['Loadability', '180 – 200 Bales / 40ft HC']],
        isNew: false,
        uses: [
            {
                title: 'Mattress Manufacturing',
                desc: 'High-resiliency natural brown coir fibre sheets are rubberized to create breathable, eco-friendly luxury mattresses.',
                image: 'assets/images/Products/brownCoir.jpeg',
                icon: 'bi-moon-stars-fill'
            },
            {
                title: 'Geotextiles & Erosion Control',
                desc: 'Spun into heavy nets and mats to hold soil on steep slopes, protecting against run-offs and assisting vegetation.',
                image: 'assets/images/Products/coirfiberNew3.jpeg',
                icon: 'bi-bounding-box-on'
            },
            {
                title: 'Ropes & Cordage Production',
                desc: 'Traditional hand-spun coir ropes are naturally saltwater-resistant, making them ideal for maritime and agricultural uses.',
                image: 'assets/images/Products/whiteCoirFibre.jpeg',
                icon: 'bi-activity'
            }
        ],
        whereUsed: [
            {
                title: 'Furniture & Upholstery Industries',
                desc: 'Used as premium, breathable and durable structural cushioning inside luxury sofas, car seats, and chairs.',
                image: 'assets/images/Products/factory_conveyor_belt.jpeg',
                icon: 'bi-building-fill-gear'
            },
            {
                title: 'Civil Engineering Sites',
                desc: 'Laid along riverbanks, hillsides, and highway slopes to prevent land sliding and support topsoil stability.',
                image: 'assets/images/Products/infrastructure.jpeg',
                icon: 'bi-cone-striped'
            },
            {
                title: 'Agricultural & Marine Settings',
                desc: 'Serves as climbing ropes for hops/vines and heavy saltwater-resistant rigging on marine transport ships.',
                image: 'assets/images/Products/raw_coconut_husks.jpeg',
                icon: 'bi-anchor'
            }
        ],
        crops: ['Hops', 'Grapes', 'Vanilla Vines', 'Climbing Peppers', 'Runner Beans'],
        reviews: [
            { name: 'David Carter', location: 'Melbourne, Australia', rating: 5, comment: 'Excellent strength and clean fibers. The moisture level is perfectly within specs, making it highly reliable for our production line.' },
            { name: 'Kenji Sato', location: 'Yokohama, Japan', rating: 5, comment: 'Highly resilient coir fiber with minimal dust. The uniform bale size makes storage and handling extremely efficient.' },
            { name: 'Clara Dupont', location: 'Lyon, France', rating: 5, comment: 'Very good density and color. The fiber length is consistent throughout the shipment. Will definitely buy again.' }
        ]
    },
    {
        id: 'p002', code: 'AC-02', name: 'Coco Peat 5 KG Block', category: 'Coco Peat',
        badge: 'bestseller',
        images: [
            'assets/images/Products/cocopeatblock631.jpeg',
            'assets/images/Products/cocopeatblock632.jpeg',
            'assets/images/Products/cocopeatblock633.jpeg',
            'assets/images/Products/cocopeatblock635.jpeg',
            'assets/images/Process/blockMaking4.jpeg'
        ],
        description: 'Premium quality coco peat blocks suitable for horticulture, hydroponics, nurseries, and greenhouse cultivation. Available in low EC, washed, unwashed, buffered, and customized grades per buyer requirements.',
        pills: ['Excellent Water Retention', 'High Air Porosity', 'Organic', 'Low EC', 'pH Balanced'],
        highlights: [
            'Retains moisture up to 8 times its own dry weight',
            'Provides high aeration to prevent root compaction and rot',
            'Low EC (Electrical Conductivity) and optimized pH (5.8 - 6.8)',
            'Yields approximately 75 liters of expanded volume per block'
        ],
        specs: [['Block Size', '30 × 30 × 12 cm'], ['Weight', '4.8 – 5 kg'], ['Expansion', '70 – 75 Litres'], ['EC Value', 'Below 0.5 mS/cm'], ['pH Value', '5.8 – 6.8'], ['Moisture', 'Below 15%'], ['Compression', '5:1']],
        isNew: false,
        uses: [
            {
                title: 'High-Yield Soil Amendment',
                desc: 'Mixed with soil to enhance aeration, fluffiness, and moisture retention, allowing plants to grow faster with less water.',
                image: 'assets/images/Products/cocopeatblock632.jpeg',
                icon: 'bi-plus-circle-fill'
            },
            {
                title: 'Professional Potting Mixes',
                desc: 'Used as a premium peat-moss alternative substrate in commercial potting soils for home gardens and large growers.',
                image: 'assets/images/Products/loose_cocopeat.jpeg',
                icon: 'bi-flower1'
            },
            {
                title: 'Bulk Substrate Hydroponics',
                desc: 'Hydrates and expands into an inert, sterile growth medium that is highly optimized for hydroponic root systems.',
                image: 'assets/images/Products/cocopeat_drying_yard.jpeg',
                icon: 'bi-droplet-fill'
            }
        ],
        whereUsed: [
            {
                title: 'Commercial Greenhouses',
                desc: 'Serves as the primary growing medium for hydroponic greenhouse crops, promoting clean and disease-free cultivation.',
                image: 'assets/images/Products/openTopGrowBag4.jpeg',
                icon: 'bi-house-heart-fill'
            },
            {
                title: 'Large-Scale Plant Nurseries',
                desc: 'Utilized in propagation trays for rooting cuttings and starting seeds under controlled environments.',
                image: 'assets/images/Products/NurserySeedlings.jpeg',
                icon: 'bi-tree-fill'
            },
            {
                title: 'Home Gardens & Landscaping',
                desc: 'Perfect for rooftop gardens, raised beds, indoor potted plants, and landscape soil enrichment.',
                image: 'assets/images/Products/infrastructure3.jpeg',
                icon: 'bi-house-fill'
            }
        ],
        crops: ['Tomatoes', 'Strawberries', 'Blueberries', 'Bell Peppers', 'Cucumbers', 'Roses'],
        reviews: [
            { name: 'Sarah Jenkins', location: 'California, USA', rating: 5, comment: 'Outstanding water retention. The block expands beautifully and has a very low EC level which keeps our plants thriving.' },
            { name: 'Marcus Weber', location: 'Munich, Germany', rating: 5, comment: 'Consistent expansion and optimal pH. We have seen a noticeable improvement in root structure since we switched to this coco peat.' },
            { name: 'Anita Desai', location: 'Bangalore, India', rating: 5, comment: 'Premium grade peat with excellent aeration. Clean, uniform quality and expands very quickly after hydration.' }
        ]
    },
    {
        id: 'p003', code: 'AC-03', name: 'Coco Peat Bricks 650 Gms', category: 'Coco Peat',
        badge: 'new',
        images: [
            'assets/images/Products/bricks.jpeg',
            'assets/images/Products/bricks2.jpeg',
            'assets/images/Products/bricks3.jpeg',
        ],
        description: 'Lightweight coco peat briquettes specially designed for home gardening, seed germination, nurseries, and horticulture. Easy to use and expand quickly after adding water.',
        pills: ['Lightweight', '8–9 L Expansion', 'Root Penetration', 'Moisture Retention', 'Indoor & Outdoor'],
        highlights: [
            'Compact, lightweight, and easy to carry and store',
            'Expands rapidly into 8-9 liters of fluffy growing medium',
            'Perfect sterile starter substrate for seeds and cuttings',
            'Maintains structural integrity for multiple seasons'
        ],
        specs: [['Brick Size', '20 × 10 × 5 cm'], ['Weight', '650 grams'], ['Expansion', '8 – 9 Litres'], ['EC Value', 'Below 0.5 mS/cm'], ['pH Value', '5.8 – 6.8'], ['Moisture', 'Below 15%']],
        isNew: false,
        uses: [
            {
                title: 'Seed Starting & Germination',
                desc: 'Provides a sterile, lightweight growth medium that encourages rapid root propagation and high germination rates.',
                image: 'assets/images/Products/bricks2.jpeg',
                icon: 'bi-egg-fried'
            },
            {
                title: 'Indoor Potted Soil Conditioner',
                desc: 'Expands quickly in water to create a soft, non-clumping soil mix that keeps houseplant roots well-aerated.',
                image: 'assets/images/Products/bricks3.jpeg',
                icon: 'bi-bounding-box'
            },
            {
                title: 'Urban Balcony Gardening',
                desc: 'Offers a space-saving, lightweight alternative to heavy soil bags, perfect for apartment balconies.',
                image: 'assets/images/Products/bricks.jpeg',
                icon: 'bi-building'
            }
        ],
        whereUsed: [
            {
                title: 'Urban Rooftops & Balconies',
                desc: 'Ideal for space-constrained home gardening setups, green balconies, and vertical flower planters.',
                image: 'assets/images/Products/openTopGrowBag4.jpeg',
                icon: 'bi-building-fill'
            },
            {
                title: 'Domestic Flower Gardens',
                desc: 'Mixed into backyard flower beds and window boxes to sustain hydration and keep flowers blooming.',
                image: 'assets/images/Products/cocopeat_seedling.jpeg',
                icon: 'bi-flower3'
            },
            {
                title: 'School & Community Gardens',
                desc: 'Lightweight bricks are clean and easy for children and community volunteers to expand and use.',
                image: 'assets/images/Products/NurserySeedlings.jpeg',
                icon: 'bi-people-fill'
            }
        ],
        crops: ['Herbs', 'Flowers', 'Tomatoes', 'Lettuce', 'Chili Peppers'],
        reviews: [
            { name: 'Emily Watson', location: 'London, UK', rating: 5, comment: 'So clean and easy to handle at home. Just add a little water and it expands into the perfect soil mix for my indoor herbs.' },
            { name: 'Liam O\'Connor', location: 'Dublin, Ireland', rating: 5, comment: 'Convenient size and expands rapidly. Perfect for small propagation setups and starting seeds on the balcony.' },
            { name: 'Hana Tanaka', location: 'Kyoto, Japan', rating: 5, comment: 'Lightweight and clean. Excellent drainage and moisture retention, making it very helpful for repotting delicate plants.' }
        ]
    },
    {
        id: 'p004', code: 'AC-04', name: 'Coir Grow Bags', category: 'Grow Bags',
        badge: 'premium',
        images: [
            'assets/images/Products/coirGrowBag.jpeg',
            'assets/images/Products/coirGrowBag2.jpeg',
            'assets/images/Products/GBS.jpeg',
            'assets/images/Products/GB.jpeg'
        ],
        description: 'Premium coco peat grow bags made from 100% coco peat and husk chips mixture. Widely used in greenhouse farming and hydroponic cultivation for vegetables, fruits, and flowers.',
        pills: ['High Water Retention', 'Superior Drainage', 'Eco-Friendly', 'Customizable Sizes', 'UV Stabilized'],
        highlights: [
            'Pre-cut planting holes and drainage slits for quick setup',
            'Blend of peat and husk chips for balanced water/air ratio',
            'UV-stabilized thick white sleeves designed for a 3-year lifespan',
            'Saves up to 50% in irrigation water and fertilizer run-off'
        ],
        specs: [['Sizes', '100×20×18 / 100×20×15 / 100×20×12 cm'], ['Volumes', '36 L / 30 L / 24 L'], ['EC', 'Below 0.5 mS/cm'], ['pH', '5.8 – 6.8'], ['UV Packing', '3 Year Stabilized'], ['Compression', '5:1']],
        isNew: false,
        uses: [
            {
                title: 'Hydroponic Vegetable Farming',
                desc: 'Specifically designed for greenhouse grow systems with custom pre-cut holes for plants and drip lines.',
                image: 'assets/images/Products/coirGrowBag2.jpeg',
                icon: 'bi-droplet-fill'
            },
            {
                title: 'Extended Crop Lifespans',
                desc: 'Formulated with a special peat-and-husk-chips blend that maintains structure for up to 3 years without rotting.',
                image: 'assets/images/Products/GBS.jpeg',
                icon: 'bi-calendar3'
            },
            {
                title: 'Maximum Root Development',
                desc: 'The sleeve provides optimal drainage and air pruning of roots, preventing root tangles and circling.',
                image: 'assets/images/Products/GB.jpeg',
                icon: 'bi-diagram-3-fill'
            }
        ],
        whereUsed: [
            {
                title: 'Soilless Modern Greenhouses',
                desc: 'Positioned in long rows with automated drip systems to cultivate large volumes of export-quality vegetables.',
                image: 'assets/images/Products/openTopGrowBag4.jpeg',
                icon: 'bi-house-heart-fill'
            },
            {
                title: 'Hydroponic Research Facilities',
                desc: 'Used by agricultural labs to run controlled nutrient and watering experiments with high precision.',
                image: 'assets/images/Products/infrastructure3.jpeg',
                icon: 'bi-mortarboard-fill'
            },
            {
                title: 'Commercial Berry Farms',
                desc: 'Placed in fields or elevated gutters to grow blueberries, strawberries, and other soft fruits.',
                image: 'assets/images/Products/NurserySeedlings.jpeg',
                icon: 'bi-flower2'
            }
        ],
        crops: ['Strawberries', 'Tomatoes', 'Bell Peppers', 'Cucumbers', 'Eggplants'],
        reviews: [
            { name: 'Robert van der Berg', location: 'Rotterdam, Netherlands', rating: 5, comment: 'The drainage slits and planting holes are pre-cut perfectly. Saves a lot of preparation time and the bags hold up really well.' },
            { name: 'Carlos Gomez', location: 'Murcia, Spain', rating: 5, comment: 'Exceptional root development. The UV-resistant cover is thick and durable, holding up easily through multiple harvest seasons.' },
            { name: 'Michael Chang', location: 'Ontario, Canada', rating: 5, comment: 'Great water-to-air ratio. Highly uniform performance across all bags, which is critical for our hydroponic setup.' }
        ]
    },
    {
        id: 'p005', code: 'AC-05', name: 'Open Top Grow Bags', category: 'Grow Bags',
        badge: 'export',
        images: [
            'assets/images/Products/openTopGrowBag.jpg',
            'assets/images/Products/openTopGrowBag3.jpeg',
            'assets/images/Products/openTopGrowBag5.jpg',
            'assets/images/Products/GBSOT.jpeg',
            'assets/images/Products/GBOT.jpeg',
        ],
        description: 'Open top grow bags specially developed for commercial cultivation and nursery applications. Pre-filled with high-quality coco peat and husk chips mixture to support healthy root growth.',
        pills: ['High Air Porosity', 'Root Development', 'Weed-Free', 'Greenhouse Ready', 'Prefilled'],
        highlights: [
            'Ready-to-use plant sleeves; just expand and plant directly',
            'UV-resistant double-layered plastic wrapper keeps root zone cool',
            'Optimized air-pruning bag design ensures dense root branching',
            'Perfect for commercial greenhouse berry and tomato production'
        ],
        specs: [['Sizes', '25×25×20 / 25×18×16 / 20×20×18 cm'], ['Volumes', '12.5 L / 7.2 L / 7.2 L'], ['Filling', 'Coco Peat + Husk Chips'], ['EC', 'Below 0.5 mS/cm'], ['pH', '5.8 – 6.8']],
        isNew: false,
        uses: [
            {
                title: 'Ready-to-Grow Plant Sleeves',
                desc: 'Pre-filled grow bags that serve as individual planters. Just add water to expand, and plant directly.',
                image: 'assets/images/Products/openTopGrowBag5.jpg',
                icon: 'bi-play-fill'
            },
            {
                title: 'Enhanced Drainage System',
                desc: 'Custom drainage slits prevent waterlogging, ensuring roots remain highly oxygenated and rot-free.',
                image: 'assets/images/Products/GBSOT.jpeg',
                icon: 'bi-water'
            },
            {
                title: 'Reusable Crop Cycles',
                desc: 'Heavy UV-resistant plastic sleeves allow the bags to be cleaned and replanted for multiple seasons.',
                image: 'assets/images/Products/GBOT.jpeg',
                icon: 'bi-arrow-repeat'
            }
        ],
        whereUsed: [
            {
                title: 'Commercial Berry Farms',
                desc: 'Perfect for growing bush berries like blueberries and raspberries in rows inside high tunnels.',
                image: 'assets/images/Products/openTopGrowBag4.jpeg',
                icon: 'bi-brightness-high-fill'
            },
            {
                title: 'Ornamental Plant Nurseries',
                desc: 'Extensively used to grow saplings, flowering shrubs, and decorative house plants before sale.',
                image: 'assets/images/Products/NurserySeedlings.jpeg',
                icon: 'bi-tree-fill'
            },
            {
                title: 'Backyard Home Orchards',
                desc: 'Ideal for home gardeners looking to grow small fruit trees, chili plants, or tomatoes on patios.',
                image: 'assets/images/Products/openTopGrowBag3.jpeg',
                icon: 'bi-house-fill'
            }
        ],
        crops: ['Blueberries', 'Raspberries', 'Roses', 'Tomatoes', 'Chili Peppers'],
        reviews: [
            { name: 'Alessandro Rossi', location: 'Latina, Italy', rating: 5, comment: 'Extremely convenient. Just expand in place and plant directly. Our berry plants established roots faster than ever before.' },
            { name: 'Julie Nielsen', location: 'Odense, Denmark', rating: 5, comment: 'Strong bags with excellent stability. The aeration is superb, preventing any root circling issues.' },
            { name: 'Samuel Taylor', location: 'Nelson, New Zealand', rating: 5, comment: 'Perfect for tomatoes. Minimal runoff and great moisture retention. Highly recommend these open-top bags.' }
        ]
    },
    {
        id: 'p006', code: 'AC-06', name: 'Coco Husk Chips', category: 'Coco Peat',
        badge: 'premium',
        images: [
            'assets/images/Products/cocochips.jpeg',
            'assets/images/Products/cocoHuskChips.jpeg',
            'assets/images/Products/cocoHuskChips2.jpeg',
            'assets/images/Products/cocoHuskChips3.jpeg',
            'assets/images/Products/cocoHuskChips4.jpeg'
        ],
        description: 'Superior quality coco husk chips processed from fresh coconut husks. Widely used in orchid cultivation, hydroponics, landscaping, reptile bedding, and horticulture applications.',
        pills: ['Excellent Aeration', 'High Moisture Retention', 'Long-Lasting', '100% Natural', 'Orchid Ideal'],
        highlights: [
            'Coarse, chunky texture creates large air pockets for epiphytic roots',
            'Highly resistant to decomposition, lasting up to 5 years',
            'Retains moisture while allowing excess water to drain instantly',
            'Clean, dust-free mulch that prevents soil-borne pathogens'
        ],
        specs: [['Chip Size', '1 – 3 cm'], ['Moisture', '15% – 18%'], ['EC Value', 'Below 0.5 mS/cm'], ['Packing', '5 kg Blocks / 25 kg Loose Bags'], ['Material', '100% Natural Coconut Husk']],
        isNew: false,
        uses: [
            {
                title: 'Orchid Growing Media',
                desc: 'Coarse chips provide orchid roots with the large air voids and high humidity they require to cling and thrive.',
                image: 'assets/images/Products/cocoHuskChips2.jpeg',
                icon: 'bi-flower1'
            },
            {
                title: 'Landscaping Mulch',
                desc: 'Placed on garden soil beds to prevent weed growth, reduce evaporation, and add an aesthetic look.',
                image: 'assets/images/Products/cocoHuskChips3.jpeg',
                icon: 'bi-shield-check'
            },
            {
                title: 'Exotic Reptile Bedding',
                desc: 'Serves as a premium, odor-absorbing and moisture-holding substrate for reptile terrariums.',
                image: 'assets/images/Products/cocoHuskChips4.jpeg',
                icon: 'bi-bug-fill'
            }
        ],
        whereUsed: [
            {
                title: 'Orchid Nurseries & Florists',
                desc: 'The primary planting substrate for high-value epiphytic plants, orchids, and bromeliads.',
                image: 'assets/images/Products/NurserySeedlings.jpeg',
                icon: 'bi-shop'
            },
            {
                title: 'Botanical & Public Gardens',
                desc: 'Applied in garden pathways and flower beds as an eco-friendly mulch to control soil temperature.',
                image: 'assets/images/Products/infrastructure3.jpeg',
                icon: 'bi-tree-fill'
            },
            {
                title: 'Pet Supply Manufacturing',
                desc: 'Packed and distributed as high-grade natural bedding for snakes, lizards, and other terrarium pets.',
                image: 'assets/images/Products/cocoHuskChips.jpeg',
                icon: 'bi-box-seam'
            }
        ],
        crops: ['Orchids', 'Anthuriums', 'Bromeliads', 'Ferns', 'Succulents'],
        reviews: [
            { name: 'Evelyn Ross', location: 'Portland, USA', rating: 5, comment: 'Ideal size and very clean chips. My orchids love the airy potting structure it provides. Very slow to decompose.' },
            { name: 'Lucas Silva', location: 'Sao Paulo, Brazil', rating: 5, comment: 'Excellent drainage capacity. Use it for landscaping mulch and potting. Retains moisture without getting waterlogged.' },
            { name: 'Chloe Martin', location: 'Vancouver, Canada', rating: 5, comment: 'Consistent chunk size with almost no fine dust. Perfect substrate for high-humidity terrariums as well.' }
        ]
    },
    {
        id: 'p007', code: 'AC-07', name: 'Coco Coins & Discs', category: 'Coco Peat',
        badge: 'new',
        images: [
            'assets/images/Products/cocoPeatCoin.jpeg',
            'assets/images/Products/cocoPeatCoin2.jpeg',
            'assets/images/Products/cocoPeatCoin3.jpeg',
        ],
        description: 'Premium compressed coco peat coins and discs designed for seed germination and nursery propagation. Expand quickly when water is added and provide an excellent growing environment for young plants.',
        pills: ['Fast Water Absorption', 'Seed Germination', 'Lightweight', 'Eco-Friendly', 'Custom Sizes'],
        highlights: [
            'Compressed pellets expand in seconds under warm water',
            'Allows direct transplanting without root shock or disruption',
            '100% biodegradable coco wrapper holds substrate securely',
            'Highly recommended for home herb kits and urban gardens'
        ],
        specs: [['Diameter', '30 – 100 mm'], ['Thickness', '8 – 20 mm'], ['pH Value', '5.8 – 6.8'], ['EC Value', 'Below 0.5 mS/cm'], ['Material', '100% Natural Coco Peat']],
        isNew: true,
        uses: [
            {
                title: 'Rapid Seed Starting',
                desc: 'Compressed discs expand inside seed trays, offering the perfect root aeration for tiny seedlings.',
                image: 'assets/images/Products/cocoPeatCoin2.jpeg',
                icon: 'bi-rocket-takeoff-fill'
            },
            {
                title: 'Biodegradable Growing Coins',
                desc: 'Seedlings can be transplanted directly with the expanded coin, preventing shock to fragile root systems.',
                image: 'assets/images/Products/cocoPeatCoin3.jpeg',
                icon: 'bi-recycle'
            }
        ],
        whereUsed: [
            {
                title: 'Seed Propagation Centers',
                desc: 'Inserted into cell plugs in commercial operations to raise thousands of vegetable starts.',
                image: 'assets/images/Products/NurserySeedlings.jpeg',
                icon: 'bi-grid-3x3-gap-fill'
            },
            {
                title: 'Commercial Greenhouse Farms',
                desc: 'Used for starting tomatoes and peppers before transplanting them into grow bags.',
                image: 'assets/images/Products/openTopGrowBag4.jpeg',
                icon: 'bi-house-heart'
            },
            {
                title: 'Urban Horticulture Kits',
                desc: 'Included in retail gardening boxes, mini herb gardens, and DIY green gifting packs.',
                image: 'assets/images/Products/cocoPeatCoin.jpeg',
                icon: 'bi-box'
            }
        ],
        crops: ['Herbs', 'Tomatoes', 'Lettuce', 'Marigolds', 'Cucumbers'],
        reviews: [
            { name: 'Sophie Dubois', location: 'Paris, France', rating: 5, comment: 'Unbelievably fast expansion! These make starting seeds so tidy. Direct transplanting means zero root shock.' },
            { name: 'James Miller', location: 'Seattle, USA', rating: 5, comment: 'The biodegradable wrap holds together perfectly during hydration. Great germination success rates.' },
            { name: 'Oliver Davis', location: 'Sydney, Australia', rating: 5, comment: 'Super convenient for balcony gardening. Fluffy texture that gives seeds a healthy, airy start.' }
        ]
    },
    {
        id: 'p008', code: 'AC-08', name: 'Semi Husked Coconut', category: 'Fresh Coconuts',
        badge: 'export',
        images: [
            'assets/images/Products/semiHuskedCoconut.jpeg',
            'assets/images/Products/fullySemiHuskedCoconuts.jpeg',
            'assets/images/Products/greenSemicoconut.jpeg'
        ],
        description: 'Premium quality fresh semi husked coconuts sourced from selected coconut farms in South India. Carefully graded and packed to maintain freshness and long shelf life for wholesale markets and food processing.',
        pills: ['80% Husk Removed', '45–60 Day Shelf Life', 'Export Quality', 'Hygienically Graded', 'Farm Fresh'],
        highlights: [
            'Hand-picked mature coconuts with a clean, protective fiber cap',
            'Rich in refreshing coconut water and thick, high-fat edible meat',
            'Natural 45-60 day shelf life, ideal for export shipping',
            'Thoroughly washed and graded to prevent external defects'
        ],
        specs: [['Husk Level', '80% Husk Removed'], ['Weight', '450 – 650 g'], ['Nut Size', 'Medium / Large'], ['Shelf Life', '45 – 60 Days'], ['Packing', 'PP Bags / Mesh Bags'], ['Loading', '20,000 – 26,000 Nuts / 40ft HC']],
        isNew: false,
        uses: [
            {
                title: 'Export & Retail Selling',
                desc: 'Graded coconuts with a clean semi-husk, ready for supermarket displays and international retail.',
                image: 'assets/images/Products/semiHuskedCoconut.jpeg',
                icon: 'bi-globe-americas'
            },
            {
                title: 'Culinary Food Production',
                desc: 'Harvested at ideal maturity to provide sweet coconut water and thick white meat for cooking.',
                image: 'assets/images/Products/fullySemiHuskedCoconuts.jpeg',
                icon: 'bi-egg-fill'
            },
            {
                title: 'Industrial Desiccated Coconut',
                desc: 'Processed at factories to manufacture desiccated coconut flakes, powder, and toppings.',
                image: 'assets/images/Products/greenSemicoconut.jpeg',
                icon: 'bi-gear-fill'
            }
        ],
        whereUsed: [
            {
                title: 'Global Wholesale Markets',
                desc: 'Shipped in temperature-controlled reefer containers to supermarkets and retail distributors worldwide.',
                image: 'assets/images/Products/warehouse_worker_stacking.jpeg',
                icon: 'bi-truck'
            },
            {
                title: 'Food Processing Plants',
                desc: 'Conveyed in food processing lines to create coconut milk, cream, and confectionery goods.',
                image: 'assets/images/Products/factory_conveyor_belt.jpeg',
                icon: 'bi-building-fill-gear'
            },
            {
                title: 'Temples & Religious Festivals',
                desc: 'Widely supplied across India and Southeast Asia for traditional rituals and festive offerings.',
                image: 'assets/images/Products/infrastructure2.jpeg',
                icon: 'bi-calendar2-heart'
            }
        ],
        crops: ['East Coast Tall', 'West Coast Tall', 'Orange Dwarf', 'Green Dwarf', 'Hybrid Palms'],
        reviews: [
            { name: 'Fatima Al-Sabah', location: 'Dubai, UAE', rating: 5, comment: 'Fresh, heavy, and filled with sweet water. The outer husk cap is clean and intact, keeping the coconut fresh.' },
            { name: 'Joseph Ng', location: 'Singapore', rating: 5, comment: 'Top export quality. The shell is hard and intact, and the kernel inside is thick and delicious.' },
            { name: 'Thomas Miller', location: 'London, UK', rating: 5, comment: 'Very good shelf life. Arrived in excellent condition with no spoilage. Highly satisfied with the maturity level.' }
        ]
    },
    {
        id: 'p009', code: 'AC-09', name: 'Fully Husked Coconut', category: 'Fresh Coconuts',
        badge: 'bestseller',
        images: [
            'assets/images/Products/fullyHuskedCoconut.jpeg',
            'assets/images/Products/fullyHuskedCoconut2.jpeg',
            'assets/images/Products/fullyHuskedCoconut3.jpeg',
            'assets/images/Products/fullyHuskedCoconut4.jpeg',
        ],
        description: 'Superior quality fully husked mature coconuts processed under hygienic conditions. Widely used for copra processing, oil extraction, culinary applications, and industrial purposes.',
        pills: ['Fully Matured', 'High Oil Yield', 'Export Graded', 'Long Freshness', 'Hygienic Processing'],
        highlights: [
            'Husk fully removed for compact storage and direct culinary processing',
            'Matured nuts containing high-oil copra, ideal for oil mills',
            'Sterile, clean shells ready for desiccated coconut production',
            'Carefully selected to ensure no cracked or dry kernels'
        ],
        specs: [['Weight', '500 – 700 g'], ['Maturity', 'Fully Matured'], ['Shape', 'Round / Oval'], ['Shelf Life', '45 – 60 Days'], ['Packing', 'Gunny / PP Bags'], ['Loading', '18,000 – 22,000 Nuts / 40ft HC']],
        isNew: false,
        uses: [
            {
                title: 'Coconut Oil Extraction',
                desc: 'Pressed to yield premium virgin coconut oil (VCO) and high-grade industrial cooking oils.',
                image: 'assets/images/Products/fullyHuskedCoconut2.jpeg',
                icon: 'bi-droplet-half'
            },
            {
                title: 'Grated Copra Processing',
                desc: 'Sun-dried to create copra, the main raw material for commercial soap and oil manufacturing.',
                image: 'assets/images/Products/fullyHuskedCoconut3.jpeg',
                icon: 'bi-sun-fill'
            },
            {
                title: 'Confectionery & Baking Ingredients',
                desc: 'Shredded and dried into fine flakes to be used in cookies, chocolates, and cakes.',
                image: 'assets/images/Products/fullyHuskedCoconut4.jpeg',
                icon: 'bi-cake2-fill'
            }
        ],
        whereUsed: [
            {
                title: 'Oil Mills & Refineries',
                desc: 'Cold-pressed or processed in high-volume mills to extract oils, copra meal, and cosmetic bases.',
                image: 'assets/images/Products/factory_conveyor_belt.jpeg',
                icon: 'bi-building-gear'
            },
            {
                title: 'Commercial Food Kitchens',
                desc: 'Distributed to restaurants, bakeries, and industrial food kitchens for cooking and baking.',
                image: 'assets/images/Products/warehouse_worker_stacking.jpeg',
                icon: 'bi-house-door-fill'
            },
            {
                title: 'Domestic & Export Markets',
                desc: 'Packed in mesh bags and loaded into export ships for direct distribution to global clients.',
                image: 'assets/images/Products/fullyHuskedCoconut.jpeg',
                icon: 'bi-ship'
            }
        ],
        crops: ['Tall Coconut Palms', 'Dwarf Green Palms', 'Orange Dwarf Palms', 'Hybrid Coconuts'],
        reviews: [
            { name: 'Ryan Reynolds', location: 'Vancouver, Canada', rating: 5, comment: 'Cleanly husked with zero shell cracking. Perfect maturity for shredding and oil extraction.' },
            { name: 'Mei Ling', location: 'Hong Kong', rating: 5, comment: 'Very high yield of thick white meat. Fresh, sweet scent upon cracking. Will reorder regularly.' },
            { name: 'Arthur Pendelton', location: 'Cardiff, UK', rating: 5, comment: 'Extremely clean and uniform in size. Long shelf life and ideal for raw culinary uses.' }
        ]
    },
    {
        id: 'p010', code: 'AC-10', name: 'Tender Coconut', category: 'Fresh Coconuts',
        badge: 'new',
        images: [
            'assets/images/Products/TenderCoconut.jpeg',
            'assets/images/Products/TenderCoconut2.jpeg',
            'assets/images/Products/TenderCoconut3.jpeg',
        ],
        description: 'Export quality tender coconuts known for their natural sweetness, refreshing water content, and nutritional value. Harvested at the ideal maturity stage to ensure premium taste and freshness.',
        pills: ['Rich in Electrolytes', 'Naturally Sweet', '20–30 Day Shelf Life', 'Hygienically Harvested', 'Export Quality'],
        highlights: [
            'Harvested fresh at the peak hydration stage (7-8 months old)',
            'Packed with natural electrolytes, potassium, and active enzymes',
            'Naturally sweet taste and soft malai (jelly-like flesh)',
            'Hygienically cleaned and cut for direct retail displays'
        ],
        specs: [['Weight', '800 g – 1.5 kg'], ['Water Content', 'High'], ['Colour', 'Green'], ['Shelf Life', '20 – 30 Days'], ['Taste', 'Naturally Sweet'], ['Packing', 'Loose / Customized']],
        isNew: true,
        uses: [
            {
                title: 'Natural Electrolyte Water',
                desc: 'Packed with vitamins and minerals, providing a healthy, fat-free, refreshing isotonic energy drink.',
                image: 'assets/images/Products/TenderCoconut2.jpeg',
                icon: 'bi-cup-straw'
            },
            {
                title: 'Fresh Coconut Jelly (Malai)',
                desc: 'Yields a soft, nutritious gelatinous pulp that is consumed directly or used in gourmet desserts.',
                image: 'assets/images/Products/TenderCoconut3.jpeg',
                icon: 'bi-heart-pulse-fill'
            },
            {
                title: 'Organic Hydration Beverage',
                desc: 'Marketed as a premium, preservative-free chemical-free beverage alternative for health-conscious consumers.',
                image: 'assets/images/Products/TenderCoconut.jpeg',
                icon: 'bi-check2-circle'
            }
        ],
        whereUsed: [
            {
                title: 'Retail Supermarkets & Cafes',
                desc: 'Sold chilled in fresh product aisles, juice bars, and cafes in urban centers.',
                image: 'assets/images/Products/warehouse_worker_stacking.jpeg',
                icon: 'bi-shop-window'
            },
            {
                title: 'Tourist Resorts & Hotels',
                desc: 'Served as a premium, tropical welcome drink to tourists and wellness spa guests.',
                image: 'assets/images/Products/infrastructure2.jpeg',
                icon: 'bi-building-fill'
            },
            {
                title: 'Local Street Drink Markets',
                desc: 'Sold fresh off trucks and pushcarts in tropical climates for instant, refreshing hydration.',
                image: 'assets/images/Products/greenSemicoconut.jpeg',
                icon: 'bi-geo-alt-fill'
            }
        ],
        crops: ['Chowghat Orange Dwarf', 'Malayan Yellow Dwarf', 'Ganga Bondam', 'Hybrid Palms'],
        reviews: [
            { name: 'Ahmed Khan', location: 'Riyadh, Saudi Arabia', rating: 5, comment: 'Incredibly sweet coconut water. The malai inside was thin and jelly-like, just as described. Very refreshing.' },
            { name: 'Yuki Sato', location: 'Tokyo, Japan', rating: 5, comment: 'Tastes exceptionally fresh, like it was just plucked. The packaging kept it cold and fresh throughout transit.' },
            { name: 'Gabriel Garcia', location: 'Madrid, Spain', rating: 5, comment: 'High water volume per nut. A healthy, natural hydration option that is far better than sugary drinks.' }
        ]
    },
    {
        id: 'p011', code: 'AC-11', name: 'Coconut Seedlings', category: 'Fresh Coconuts',
        badge: 'export',
        images: [
            'assets/images/Products/ageofSeedlings.jpeg',
            'assets/images/Products/NurserySeedlings.jpeg',
            'assets/images/Products/openTopGrowBag4.jpeg',
            'assets/images/Products/tallCoconut.jpeg'
        ],
        description: 'Healthy coconut seedlings suitable for commercial plantations, farms, landscaping projects, and agricultural developments. Grown under controlled nursery conditions for healthy growth and better yield performance.',
        pills: ['Disease-Free', 'Strong Roots', 'High Yielding', 'Tropical Climates', 'Bulk Export'],
        highlights: [
            'Raised in professional disease-free horticultural nursery beds',
            'Bred for early maturity, high nut yield, and pest resistance',
            'Strong, fibrous root systems that anchor securely on transplant',
            'High survival rate in coastal sand, loam, or clay soil fields'
        ],
        specs: [['Plant Height', '2 – 4 ft'], ['Plant Age', '6 – 12 Months'], ['Variety', 'Tall / Hybrid / Dwarf'], ['Root Condition', 'Healthy'], ['Packing', 'Poly Bag / Nursery'], ['Survival Rate', 'High']],
        isNew: false,
        uses: [
            {
                title: 'Commercial Plantation Establishment',
                desc: 'Premium seedlings grown under control nursery conditions, ready for planting on large farming blocks.',
                image: 'assets/images/Products/NurserySeedlings.jpeg',
                icon: 'bi-tree-fill'
            },
            {
                title: 'Agricultural Hybrid Breeding',
                desc: 'Hybrid varieties bred for rapid growth, early yield (within 3-4 years), and disease resistance.',
                image: 'assets/images/Products/tallCoconut.jpeg',
                icon: 'bi-patch-check-fill'
            },
            {
                title: 'Coastal Landscaping & Farming',
                desc: 'Planted along shorelines and coastal farms due to high salt tolerance and soil-binding roots.',
                image: 'assets/images/Products/ageofSeedlings.jpeg',
                icon: 'bi-water'
            }
        ],
        whereUsed: [
            {
                title: 'Agricultural Research Farms',
                desc: 'Grown in nurseries to experiment with dwarfs, tall varieties, and premium crosses.',
                image: 'assets/images/Products/openTopGrowBag4.jpeg',
                icon: 'bi-mortarboard'
            },
            {
                title: 'Coastal Agro-Forestry Projects',
                desc: 'Placed in coastal sands to establish windbreaks and control shoreline sand movements.',
                image: 'assets/images/Products/infrastructure.jpeg',
                icon: 'bi-shield-shaded'
            },
            {
                title: 'Large Private Plantations',
                desc: 'Shipped in crates to establish new coconut estates and replace old, low-yielding palms.',
                image: 'assets/images/Products/infrastructure2.jpeg',
                icon: 'bi-grid-fill'
            }
        ],
        crops: ['Tall Coconut Cultivars', 'Dwarf Cultivars', 'Hybrid Palms', 'TxD Palms'],
        reviews: [
            { name: 'Benjamin Harrison', location: 'Florida, USA', rating: 5, comment: 'Strong, vigorous roots and healthy green leaves. They have established quickly in our sandy coastal soil.' },
            { name: 'Wayan Surya', location: 'Bali, Indonesia', rating: 5, comment: 'Healthy seedlings with excellent root structure. Very high survival rate after transplanting in our orchard.' },
            { name: 'Maria Gonzales', location: 'Manila, Philippines', rating: 5, comment: 'Arrived well-packed and healthy. They are showing rapid growth within just a few weeks of planting.' }
        ]
    }
];

const CAT_META = {
    'Coir Fibre': { icon: 'bi-tree-fill', color: '#2e7d32', bg: '#e8f5e9', desc: 'Natural coir fibre products' },
    'Coco Peat': { icon: 'bi-circle-fill', color: '#e65100', bg: '#fff3e0', desc: 'Growing media & substrates' },
    'Grow Bags': { icon: 'bi-bag-fill', color: '#1565c0', bg: '#e3f2fd', desc: 'Greenhouse & hydroponic bags' },
    'Fresh Coconuts': { icon: 'bi-egg-fill', color: '#6d4c41', bg: '#efebe9', desc: 'Coconuts & seedlings' }
};

const BADGE_META = {
    'new': { cls: 'pcb-new', lbl: 'New' },
    'bestseller': { cls: 'pcb-bestseller', lbl: 'Best Seller' },
    'premium': { cls: 'pcb-premium', lbl: 'Premium' },
    'export': { cls: 'pcb-export', lbl: 'Export Quality' }
};
