export const membershipsData = {
  plans: [
    {
      id: 'starter',
      name: 'STARTER',
      tagline: 'Essential access for disciplined independent lifters & fitness enthusiasts.',
      monthlyPrice: 89,
      annualPrice: 72,
      popular: false,
      description: 'Full unhindered access to our premium strength equipment, cardio bays, free weights, and functional training zone.',
      features: [
        'Unlimited 7-day gym floor access',
        'Initial 60-min movement assessment',
        'Complimentary locker & rain shower access',
        'FORGE mobile workout tracking companion app',
        '1 free guest pass per month',
        'Standard member event access'
      ],
      ctaText: 'Select Starter Plan',
      badge: 'Independent Training'
    },
    {
      id: 'plus',
      name: 'PLUS',
      tagline: 'The complete club experience combining gym access and unlimited coached group classes.',
      monthlyPrice: 149,
      annualPrice: 119,
      popular: true,
      description: 'Everything in Starter plus unlimited daily access to all coached group training classes, kettlebell labs, and mobility flows.',
      features: [
        'All Starter access & amenities included',
        'Unlimited weekly group classes (HIIT, Strength, Mobility)',
        'Bi-monthly InBody 570 body composition scans',
        'Priority 7-day advance class booking window',
        '2 free guest passes per month',
        'Full towel service & premium grooming amenities',
        '15% discount on private coaching packages'
      ],
      ctaText: 'Select Plus Plan',
      badge: 'Most Popular'
    },
    {
      id: 'elite',
      name: 'ELITE',
      tagline: 'The ultimate athletic package with dedicated 1-on-1 personal coaching & recovery.',
      monthlyPrice: 229,
      annualPrice: 185,
      popular: false,
      description: 'Our highest tier of mentorship, including monthly private coaching sessions, nutrition synchronization, and full recovery lounge access.',
      features: [
        'All Plus features & amenities included',
        '2 monthly 60-min 1-on-1 personal coaching sessions',
        'Unlimited Infrared Sauna & Cold Plunge access',
        'Personalized nutrition & macronutrient roadmaps',
        'Permanent assigned executive locker',
        'Unlimited free guest passes (with member present)',
        'Direct WhatsApp direct chat with Head Coach'
      ],
      ctaText: 'Select Elite Plan',
      badge: 'VIP Mentorship'
    }
  ],

  comparisonMatrix: [
    { feature: 'Gym Floor & Weight Room Access', starter: 'Unlimited', plus: 'Unlimited', elite: 'Unlimited', category: 'Access' },
    { feature: 'Opening Hours (Early & Late)', starter: 'Full Hours', plus: 'Full Hours', elite: 'Full Hours', category: 'Access' },
    { feature: 'Coached Group Fitness Classes', starter: 'Drop-in fee ($25)', plus: 'Unlimited Included', elite: 'Unlimited Included', category: 'Classes' },
    { feature: 'Advance Class Booking Window', starter: '3 Days', plus: '7 Days', elite: '14 Days Priority', category: 'Classes' },
    { feature: 'Comprehensive Movement Assessment', starter: 'Initial Only', plus: 'Quarterly', elite: 'Monthly Re-screens', category: 'Coaching' },
    { feature: '1-on-1 Personal Training Sessions', starter: 'Add-on only', plus: 'Add-on (15% off)', elite: '2 Sessions / Month Included', category: 'Coaching' },
    { feature: 'InBody 570 Body Composition Scans', starter: 'Initial Only', plus: 'Every 8 Weeks', elite: 'Unlimited Scans', category: 'Tracking' },
    { feature: 'FORGE Companion Workout Log App', starter: 'Basic App', plus: 'Pro App Access', elite: 'Pro + Direct Coach Sync', category: 'Tracking' },
    { feature: 'Infrared Sauna & Cold Plunge Recovery', starter: 'Drop-in ($20)', plus: 'Drop-in ($10)', elite: 'Unlimited Included', category: 'Recovery' },
    { feature: 'Towel Service & Grooming Amenities', starter: 'Standard', plus: 'Full Luxury Service', elite: 'Executive VIP Service', category: 'Amenities' },
    { feature: 'Assigned Executive Locker', starter: 'Day Locker', plus: 'Day Locker', elite: 'Permanent Private Locker', category: 'Amenities' },
    { feature: 'Complimentary Guest Passes', starter: '1 / month', plus: '2 / month', elite: 'Unlimited Passes', category: 'Community' }
  ]
};
