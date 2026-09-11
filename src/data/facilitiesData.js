export const facilitiesData = {
  zones: [
    {
      id: 'strength-area',
      name: 'Barbell & Strength Area',
      tagline: 'Heavy-duty power racks and calibrated steel for serious compound lifting.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
      description: 'Engineered with 10 custom Olympic lifting platforms, Eleiko competition barbells, calibrated steel plates, and Westside-spaced power cages.',
      highlights: ['10 Olympic drop platforms', 'Eleiko & Rogue Ohio competition bars', 'Safety squat bars & trap bars', 'Belt squat & reverse hyper stations']
    },
    {
      id: 'free-weights',
      name: 'Free Weights & Dumbbell Zone',
      tagline: 'Expansive dumbbell arrays and ergonomic commercial benches.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
      description: 'Over 60 pairs of urethane dumbbells ranging from 5 lbs to 150 lbs, flanked by 12 multi-angle heavy duty adjustable benches and deadlift jacks.',
      highlights: ['Urethane dumbbells 5 lbs to 150 lbs (2.5 lb micro-increments)', 'Adjustable decline, flat, and incline benches', 'Chalk stations and heavy duty racks', 'Mirrored precision alignment bays']
    },
    {
      id: 'functional-turf',
      name: 'Functional Training Turf',
      tagline: 'A 40-yard indoor turf strip for speed, sleds, and rotational power.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
      description: 'High-density synthetic sprint turf for weighted sled pushes, farmer carries, agility footwork drills, and dynamic movement flows.',
      highlights: ['40-yard heavy-duty indoor sprint track', 'Dog sleds & prowlers with rubber skids', 'Kettlebells from 8kg to 48kg', 'Slam balls, wall balls & battle ropes']
    },
    {
      id: 'cardio-bay',
      name: 'Conditioning & Cardio Bay',
      tagline: 'Non-motorized curved treadmills, SkiErgs, and air bikes for pure aerobic power.',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80',
      description: 'Curated endurance machines designed to challenge your cardiovascular threshold with low orthopedic impact and maximum caloric return.',
      highlights: ['Woodway curved non-motorized treadmills', 'Concept2 Rowers, SkiErgs & BikeErgs', 'Rogue Echo air bikes', 'StairMaster 10G stepmills']
    },
    {
      id: 'group-studio',
      name: 'Group Training Studio',
      tagline: 'Acoustically tuned, high-energy environment for cohort classes.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
      description: 'Equipped with custom modular rigs, dedicated screens for telemetry feedback, shock-absorbing flooring, and ambient lighting.',
      highlights: ['Shock-absorbent acoustic sports flooring', 'Heart rate telemetry monitors', 'Modular suspension trainer hooks', 'State-of-the-art air filtration']
    },
    {
      id: 'pt-studio',
      name: 'Private Personal Training Area',
      tagline: 'Dedicated floor space for 1-on-1 coaching and movement diagnostics.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80',
      description: 'An exclusive area where coaches conduct in-depth orthopedic assessments, video movement analysis, and private coaching without crowds.',
      highlights: ['Force plate jump testing station', 'Dual adjustable cable columns', 'Private consultation table and InBody scanner', 'Dedicated dumbbells and kettlebells']
    },
    {
      id: 'locker-rooms',
      name: 'Executive Locker Rooms',
      tagline: 'Spacious, clean, and stocked with luxury grooming amenities.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      description: 'Designed like a boutique hotel: private rainfall showers, keyless digital lockers, Dyson hair care, and premium grooming products.',
      highlights: ['Private cedar rainfall shower suites', 'Keyless digital RFID lockers', 'Complimentary plush bath and sweat towels', 'Aesop luxury body and hair care products']
    },
    {
      id: 'recovery-lounge',
      name: 'Contrast Therapy & Recovery',
      tagline: 'Infrared sauna, cold plunge tubs, and pneumatic compression boots.',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80',
      description: 'Facilitate rapid parasympathetic recovery, reduce delayed onset muscle soreness, and revitalize your central nervous system.',
      highlights: ['Full spectrum infrared sauna cabins', 'Dual filtered 42°F cold plunge baths', 'Normatec compression therapy boots', 'Hyperice massage gun recovery stations']
    }
  ],

  equipmentCategories: [
    {
      category: 'Strength & Power',
      items: [
        { name: 'Eleiko Competition Power Racks', detail: 'Laser-cut Westside hole spacing, sandwich J-cups, strap safeties' },
        { name: 'Competition Barbell Arsenal', detail: 'Eleiko IPF power bars, Rogue Ohio bars, stainless steel trap bars' },
        { name: 'Calibrated Steel Plates', detail: 'Friction-resistant machine-calibrated plates to 0.25 lb precision' },
        { name: 'Specialty Lower Body Machines', detail: 'Belt squats, pendulum squats, standing leg curls, seated calf' }
      ]
    },
    {
      category: 'Conditioning & Cardio',
      items: [
        { name: 'Woodway Curve Treadmills', detail: 'Zero-motor design powered entirely by user kinetic drive' },
        { name: 'Concept2 Complete Lineup', detail: 'RowErg, SkiErg, and BikeErg with PM5 wireless performance monitors' },
        { name: 'Rogue Echo Heavy-Duty Bikes', detail: 'Steel fan blades for brutal, self-regulated anaerobic spikes' },
        { name: 'StairMaster 10G Stepmills', detail: 'Overdrive training mode for high-intensity glute activation' }
      ]
    },
    {
      category: 'Free Weights & Accessories',
      items: [
        { name: 'Solid Urethane Dumbbells', detail: '5 lbs to 150 lbs pairs on continuous seamless steel saddles' },
        { name: 'Cast Iron Kettlebell Arsenal', detail: '8 kg up to 48 kg "The Beast" with color-coded competition handles' },
        { name: 'Commercial Incline Benches', detail: '11-gauge steel, zero-gap design from -15° decline to 85° upright' },
        { name: 'Chalk Pods & Specialty Grips', detail: 'Magnesium carbonate stations and fat grip attachments' }
      ]
    },
    {
      category: 'Functional & Recovery',
      items: [
        { name: '40-Yard Sprint Turf Track', detail: 'Non-directional 12mm pile with inlaid yard markers' },
        { name: 'Commercial Prowlers & Sleds', detail: 'Dual-handle turf push sleds with wheelbarrow attachments' },
        { name: 'Infrared Sauna Systems', detail: 'Far/mid/near infrared wavelengths with chromotherapy lighting' },
        { name: 'Chilled Water Plunge Tubs', detail: 'Continuous ozone-filtered water maintained at 40°F–44°F' }
      ]
    }
  ]
};
