const wordList =  [
    {
        word: "Physical quantity",
        hint: "Quantity that can be measured and consists of a numerical magnitude and a unit",
        type: "Term"
    },
    {
        word: "Complete to-and-fro motion of a pendulum",
        hint: "Oscillation",
        type: "Definition"
    },
    {
        word: "Period",
        hint: "Time taken for 1 complete oscillation of a pendulum",
        type: "Term"
    },
    {
        word: "Scalar quantity",
        hint: "Physical quantity with only magnitude",
        type: "Term"
    },
    {
        word: "Vector quantity",
        hint: "Physical quantity with both direction and magnitude",
        type: "Term"
    },
    {
        word: "Distance moved per unit time",
        hint: "Speed",
        type: "Definition"
    },
    {
        word: "Total length covered by a moving object regardless of direction",
        hint: "Distance",
        type: "Definition"
    },
    {
        word: "Displacement",
        hint: "Shortest distance and direction of an object measured in a straight line from a fixed starting reference point",
        type: "Term"
    },
    {
        word: "Velocity",
        hint: "Rate of change of displacement",
        type: "Term"
    },
    {
        word: "Rate of change of velocity",
        hint: "Acceleration",
        type: "Definition"
    },
    {
        word: "Uniform acceleration",
        hint: "Constant rate of change of velocity",
        type: "Term"
    },
    {
        word: "Forces",
        hint: "Interaction between objects to explain changes in motion",
        type: "Term"
    },
    {
        word: "Contact forces",
        hint: "Interaction between objects in contact",
        type: "Term"
    },
    {
        word: "Non-contact forces",
        hint: "Does not require objects to be in contact",
        type: "Term"
    },
    {
        word: "Force that opposes or tend to oppose motion between surfaces in contact",
        hint: "Friction",
        type: "Definition"
    },
    {
        word: "Air resistance",
        hint: "Frictional force exerted by air that opposes motion of moving objects",
        type: "Term"
    },
    {
        word: "Push exerted by a surface on an object pressing on it",
        hint: "Normal force",
        type: "Definition"
    },
    {
        word: "Pull exerted by a stretched object on an object attached to it",
        hint: "Tension",
        type: "Definition"
    },
    {
        word: "Pull exerted by Earth's gravity on any object",
        hint: "Gravitational force",
        type: "Definition"
    },
    {
        word: "Attractive or repulsive forces between electric charges",
        hint: "Electrostatic force",
        type: "Definition"
    },
    {
        word: "Magnetic force",
        hint: "Attractive or repulsive forces between magnets",
        type: "Term"
    },
    {
        word: "Measure of the amount of matter in a body",
        hint: "Mass",
        type: "Definition"
    },
    {
        word: "Amount of gravitational force acting on an object with mass",
        hint: "Weight",
        type: "Definition"
    },
    {
        word: "Gravitational field strength",
        hint: "Gravitational force per unit mass placed at that point",
        type: "Term"
    },
    {
        word: "Region where a mass experiences a force due to gravitational attraction",
        hint: "Gravitational field",
        type: "Definition"
    },
    {
        word: "Sum of the forces acting on an object in all directions",
        hint: "Resultant force",
        type: "Definition"
    },
    {
        word: "Density",
        hint: "Mass per unit volume",
        type: "Term"
    },
    {
        word: "Pressure",
        hint: "Force acting per unit area",
        type: "Term"
    },
    {
        word: "Resultant force of the object is 0, meaning there is no effect on its motion",
        hint: "Balanced forces",
        type: "Definition"
    },
    {
        word: "Resultant force of the object is not 0, causing an effect on its motion",
        hint: "Unbalanced forces",
        type: "Definition"
    },
    {
        word: "Every object will continue in its state of rest or uniform motion in a straight line unless a resultant force acts on it",
        hint: "Newton's first law of motion",
        type: "Definition"
    },
    {
        word: "When a resultant force acts on an object of a constant mass, the object will accelerate in direction of resultant force",
        hint: "Newton's second law of motion",
        type: "Definition"
    },
    {
        word: "If body A exerts a force on body B, body B will exert an equal and opposite force on body A",
        hint: "Newton's third law of motion",
        type: "Definition"
    },
    {
        word: "Usage of arrows to represent forces acting on an object",
        hint: "Free-body diagram",
        type: "Definition"
    },
    {
        word: "Moment",
        hint: "Turning effect of a force",
        type: "Term"
    },
    {
        word: "Moment of a force",
        hint: "Product of the force and the perpendicular distance from the pivot to the line of action of the force",
        type: "Term"
    },
    {
        word: "When a body is in equilibrium, the sum of clockwise moments about a pivot is equal to the sum of anticlockwise moments about the same pivot",
        hint: "Principles of moment",
        type: "Definition"
    },
    {
        word: "Equilibrium",
        hint: "Resultant force and moment on an object is 0",
        type: "Term"
    },
    {
        word: "Imaginary point where the entire weight of object seems to act",
        hint: "Centre of gravity",
        type: "Definition"
    },
    {
        word: "Energy that cannot be created or destroyed but can be transferred from one store to another while maintaining the total energy of the isolated system",
        hint: "Principle of conservation of energy",
        type: "Definition"
    },
    {
        word: "Product of the force and the distance moved by the object in the direction of the force",
        hint: "Work done",
        type: "Definition"
    },
    {
        word: "Work done or energy transferred per unit time",
        hint: "Power",
        type: "Definition"
    },
    {
        word: "Kinetic particle model of matter",
        hint: "Made up of tiny particles that are in a continuous motion",
        type: "Term"
    },
    {
        word: "Particles",
        hint: "Positive and negative electric charges that are not distributed uniformly",
        type: "Term"
    },
    {
        word: "Attractive forces that weaken when forces between particles are stretched",
        hint: "Forces between particles",
        type: "Definition"
    },
    {
        word: "Energy store that is made up of the total kinetic energy associated with the random motion of particles and total potential energy between particles in the system",
        hint: "Internal energy",
        type: "Definition"
    },
    {
        word: "Particles are closely packed together in an orderly manner that vibrates about its fixed position which are held together by strong electrostatic forces of attraction and have a fixed shape and volume",
        hint: "Solid",
        type: "Definition"
    },
    {
        word: "Particles are less closely packed together in a disorderly manner that slides over each other freely throughout the liquid which are held together by weaker electrostatic forces of attraction and have a fixed volume and an indefinite shape",
        hint: "Liquid",
        type: "Definition"
    },
    {
        word: "Particles are very far apart in a disorderly manner that moves freely in any direction which are held together by very weak electrostatic forces of attraction and have an indefinite shape and volume which can also be compressed",
        hint: "Gas",
        type: "Definition"
    },
    {
        word: "Rises with the average kinetic energy of particles in a body and vice versa",
        hint: "Temperature",
        type: "Definition"
    },
    {
        word: "Thermal equilibrium",
        hint: "Describes a state in which ≥ 2 objects have the same temperature and there is no net transfer of energy between them",
        type: "Term"
    },
    {
        word: "Energy is transferred through passing on of vibrational motion from one particle to another",
        hint: "Conduction",
        type: "Definition"
    },
    {
        word: "Means of convection currents of a fluid due to density differences",
        hint: "Convection",
        type: "Definition"
    },
    {
        word: "Continuous process of less dense fluid rising to the top and denser fluid sinking to the bottom",
        hint: "Convection current",
        type: "Definition"
    },
    {
        word: "Process of energy transfer by electromagnetic waves without requiring a medium",
        hint: "Radiation",
        type: "Definition"
    },
    {
        word: "Transverse wave",
        hint: "Direction of vibration is perpendicular to direction of wave travel",
        type: "Term"
    },
    {
        word: "Longitudinal wave",
        hint: "Direction of vibration is parallel to direction of wave travel",
        type: "Term"
    },
    {
        word: "Disturbance that propagates through space, transferring energy with it but not matter",
        hint: "Wave",
        type: "Definition"
    },
    {
        word: "Vector pointing from its rest position to any point on wave",
        hint: "Displacement of a wave",
        type: "Definition"
    },
    {
        word: "2 points that always have the same direction of motion",
        hint: "In phase",
        type: "Definition"
    },
    {
        word: "Maximum magnitude of displacement from rest position",
        hint: "Amplitude",
        type: "Definition"
    },
    {
        word: "Highest points of a transverse wave",
        hint: "Crests",
        type: "Definition"
    },
    {
        word: "Lowest points of a transverse wave",
        hint: "Troughs",
        type: "Definition"
    },
    {
        word: "Time taken by each point on the wave to complete 1 oscillation",
        hint: "Period of a wave",
        type: "Definition"
    },
    {
        word: "Number of oscillations each point on the wave completes per second",
        hint: "Frequency",
        type: "Definition"
    },
    {
        word: "Shortest distance between 2 successive crests or troughs",
        hint: "Wavelength",
        type: "Definition"
    },
    {
        word: "Distance travelled by wave per unit time",
        hint: "Wave speed",
        type: "Definition"
    },
    {
        word: "Imaginary line joining all adjacent points that are in phase",
        hint: "Wavefronts",
        type: "Definition"
    },
    {
        word: "Logitudinal wave created by a vibrating source that passes forward and backward vibrations to surrounding air particles, causing alternate regions of air particles to be compressed and extended",
        hint: "Sound",
        type: "Definition"
    },
    {
        word: "Compressions",
        hint: "Compressed regions of air particles",
        type: "Term"
    },
    {
        word: "Rarefactions",
        hint: "Extended regions of air particles",
        type: "Term"
    },
    {
        word: "Reflection of sound",
        hint: "Echolocation",
        type: "Definition"
    },
    {
        word: "Electromagnetic (EM) waves",
        hint: "Transverse waves produced by oscillating electric and magnetic fields that travel at the speed of light through a vacuum",
        type: "Term"
    },
    {
        word: "Light ray going towards surface",
        hint: "Incident ray",
        type: "Definition"
    },
    {
        word: "Reflected ray",
        hint: "Light ray going away from surface",
        type: "Term"
    },
    {
        word: "Perpendicular line to surface at point of incidence",
        hint: "Normal",
        type: "Definition"
    },
    {
        word: "Angle of incidence",
        hint: "Angle between incident ray and normal",
        type: "Term"
    },
    {
        word: "Angle of reflection",
        hint: "Angle between reflected ray and normal",
        type: "Term"
    },
    {
        word: "Incident ray, reflected ray and normal at point of incidence all lie in the same plane",
        hint: "First law of reflection",
        type: "Definition"
    },
    {
        word: "Angle of incidence is equal to angle of reflection",
        hint: "Second law of reflection",
        type: "Definition"
    },
    {
        word: "Bending of light as it passes from one optical medium to another",
        hint: "Refraction",
        type: "Definition"
    },
    {
        word: "Refracted ray",
        hint: "Light ray entering a medium that undergoes a direction change",
        type: "Term"
    },
    {
        word: "Angle of refraction",
        hint: "Angle between refracted ray and normal at point of incidence",
        type: "Term"
    },
    {
        word: "Ray that emerges from medium after refracting",
        hint: "Emergent ray",
        type: "Definition"
    },
    {
        word: "Incident ray, refracted ray and normal at point of incidence all lie in the same plane",
        hint: "First law of refraction",
        type: "Definition"
    },
    {
        word: "For 2 given media, the ratio of the sine of the angle of incidence to the sine of the angle of refraction is a constant",
        hint: "Second law of refraction",
        type: "Definition"
    },
    {
        word: "Refractive index",
        hint: "Ratio of the speed of light in a vacuum to the speed of light in a medium",
        type: "Term"
    },
    {
        word: "Regardless of how many times a light ray has been reflected or refracted, it will follow the same path when direction is reversed",
        hint: "Principle of reversibility of rays",
        type: "Definition"
    },
    {
        word: "Transparent material that is able to concentrate light rays",
        hint: "Converging lens",
        type: "Definition"
    },
    {
        word: "Line passing through centre of the lens perpendicular to plane of the lens",
        hint: "Principal axis",
        type: "Definition"
    },
    {
        word: "Point on principal axis that is midway between surfaces of the lens",
        hint: "Optical centre",
        type: "Definition"
    },
    {
        word: "Plane perpendicular to the principal axis on which all parallel rays meet after passing through the lens",
        hint: "Focal plane",
        type: "Definition"
    },
    {
        word: "Point on principal axis where all rays parallel to principal axis meet after passing through the lens",
        hint: "Principal focal point",
        type: "Definition"
    },
    {
        word: "Distance between optical centre and principal focus point",
        hint: "Focal length",
        type: "Defintion"
    },
    {
        word: "Electric charge",
        hint: "Causes objects to experience a force when placed in an EM field",
        type: "Term"
    },
    {
        word: "Neutral objects",
        hint: "Number of protons is equal to the number of electrons",
        type: "Term"
    },
    {
        word: "Negatively charged objects",
        hint: "Number of electrons is more than the number of protons",
        type: "Term"
    },
    {
        word: "Positively charged objects",
        hint: "Number of electrons is less than the number of protons",
        type: "Term"
    },
    {
        word: "Rate of flow of electric charge",
        hint: "Electric current",
        type: "Definition"
    },
    {
        word: "Convectional current",
        hint: "Flow of positive charges from positive to negative terminal",
        type: "Term"
    },
    {
        word: "Electron flow",
        hint: "Flow of negative charges from negative to positive terminal",
        type: "Term"
    },
    {
        word: "Work done by the source in driving a unit charge around a complete circuit and is present even when no current is being drawn through the source",
        hint: "Electromotive force",
        type: "Definition"
    },
    {
        word: "Work done per unit charge in driving charges through the current and is 0 in the absence of current",
        hint: "Potential difference",
        type: "Definition"
    },
    {
        word: "Resistance",
        hint: "Ratio of potential difference across the component to current flowing through the component",
        type: "Term"
    },
    {
        word: "Resistivity",
        hint: "Resistance of a material for a unit area per unit length",
        type: "Term"
    },
    {
        word: "Direct current (DC) circuit",
        hint: "Current that flows in only 1 direction with low applied voltage",
        type: "Term"
    },
    {
        word: "Alternating current (AC) circuit",
        hint: "Current that changes direction 50 or 60 times every second with high applied voltage",
        type: "Term"
    },
    {
        word: "A closed loop path connecting components together",
        hint: "Closed circuit",
        type: "Definition"
    },
    {
        word: "A very large or infinite resistance in the path",
        hint: "Open circuit",
        type: "Definition"
    },
    {
        word: "A low resistance path",
        hint: "Short circuit",
        type: "Definition"
    },
    {
        word: "Series circuit",
        hint: "All components are connected in a single line to create one single loop for electric current to flow",
        type: "Term"
    },
    {
        word: "Parallel circuit",
        hint: "Electric current is split into multiple branches before rejoining to form one circuit since components are placed on their own separate branches",
        type: "Term"
    },
    {
        word: "A safety wire that earth appliances with a metal case which is yellow and green in colour",
        hint: "Earth wire",
        type: "Definition"
    },
    {
        word: "A wire that completes the path allowing current to flow through appliances in the electrical circuit which is kept at 0 voltage and is blue in colour",
        hint: "Neutral wire",
        type: "Definition"
    },
    {
        word: "Used in socket plugs to ensure the current flowing cannot exceed the fuse limit that breaks when exceeded, resulting in an open circuit",
        hint: "Fuse",
        type: "Definition"
    },
    {
        word: "A wire that carries both high voltage and current which is brown in colour",
        hint: "Live wire",
        type: "Definition"
    },
    {
        word: "Used in distribution box to ensure the current flowing cannot exceed the circuit breaker rating which trips when exceeded, resulting in open circuits",
        hint: "Circuit breaker",
        type: "Definition"
    },
    {
        word: "Prevents the live wire from causing the metal casing to be at a high electrical potential",
        hint: "Earthed metal casing",
        type: "Definition"
    },
    {
        word: "Prevents contact with live wire",
        hint: "Double insulation",
        type: "Definition"
    },
    {
        word: "Induced magnetism",
        hint: "Occurs when a magnetic material is placed closed to a strong magnet or within a current carrying solenoid",
        type: "Term"
    },
    {
        word: "Temporary magnet",
        hint: "Retains its magnetism in the presence of an electric current or a permanent magnetic field",
        type: "Term"
    },
    {
        word: "Temporary magnets made of soft iron that is easily magnetised and demagnetised with stronger induced magnetism",
        hint: "Soft magnetic material",
        type: "Definition"
    },
    {
        word: "Permanent magnet",
        hint: "Does not require presence of an electric current or a permanent magnetic field to retain its magnetism",
        type: "Term"
    },
    {
        word: "Permanent magnet made of steel that is difficult to magnetise and demagnetise",
        hint: "Hard magnetic material",
        type: "Definition"
    },
    {
        word: "Imaginary lines used to represent direction and strength of magnetic field",
        hint: "Magnetic field lines",
        type: "Definition"
    },
    {
        word: "Proton (atomic) number",
        hint: "Number of protons in the nucleus",
        type: "Term"
    },
    {
        word: "Smallest particle that still have the chemical characteristics of an element",
        hint: "Atom",
        type: "Definition"
    },
    {
        word: "Total number of protons and neutrons in the nucleus",
        hint: "Nucleon number / Relative atomic mass",
        type: "Definition"
    },
    {
        word: "Atoms of the same element that have the same number of protons and electrons but different number of neutrons",
        hint: "Isotopes",
        type: "Definition"
    },
    {
        word: "Ionisation",
        hint: "Ability to eject electrons from atoms to form ions",
        type: "Term"
    },
    {
        word: "Random process by which an unstable atomic nucleus loses its energy by emission of EM radiation or particles",
        hint: "Nuclear decay",
        type: "Definition"
    },
    {
        word: "Consists of 2 protons and 2 neutrons tightly bound together that is identical to the helium nucleus with the highest ionising effect and least penetrating ability that can be easily absorbed by a piece of paper, thin aluminium foil or human skin",
        hint: "Alpha particles",
        type: "Definition"
    },
    {
        word: "Fast moving electrons ejected from a radioactive nucleus with medium ionising effect and medium penetrating ability that can be absorbed by a piece of aluminium that is a few millimetres thick",
        hint: "Beta particles",
        type: "Definition"
    },
    {
        word: "EM radiation emitted by a nucleus with excess energy with the lowest ionising effect and highest penetrating ability that can pass through materials easily and absorbed by lead that is a few centimetres thick or a very thick concrete",
        hint: "Gamma ray",
        type: "Definition"
    },
    {
        word: "Nuclear radiation in an environment where no radioactive source has been deliberately introduced",
        hint: "Background radiation",
        type: "Definition"
    },
    {
        word: "Ionising radiation",
        hint: "Radiation with high energies that can knock off electrons from atoms to form ions",
        type: "Term"
    },
    {
        word: "Geiger-Muller counter",
        hint: "Connected to counter to measure amount of ionising nuclear radiation released when a radioactive atom spontaneously emit EM radiation",
        type: "Term"
    },
    {
        word: "Time taken for half the nuclei of that nuclide in any sample to decay",
        hint: "Half-life",
        type: "Definition"
    },
    {
        word: "Tera",
        hint: "10¹²",
        type: "Prefix"
    },
    {
        word: "Giga",
        hint: "10⁹",
        type: "Prefix"
    },
    {
        word: "Mega",
        hint: "10⁶",
        type: "Prefix"
    },
    {
        word: "Kilo",
        hint: "10³",
        type: "Prefix"
    },
    {
        word: "Deci",
        hint: "10⁻¹",
        type: "Prefix"
    },
    {
        word: "Centi",
        hint: "10⁻²",
        type: "Prefix"
    },
    {
        word: "Milli",
        hint: "10⁻³",
        type: "Prefix"
    },
    {
        word: "Micro",
        hint: "10⁻⁶",
        type: "Prefix"
    },
    {
        word: "Nano",
        hint: "10⁻⁹",
        type: "Prefix"
    },
    {
        word: "Pico",
        hint: "10⁻¹²",
        type: "Prefix"
    },
    {
        word: "Radio waves",
        hint: "< 10⁹",
        type: "EM Frequency"
    },
    {
        word: "Microwave",
        hint: "> 10⁹ but < 10¹²",
        type: "EM Frequency"
    },
    {
        word: "Infrared",
        hint: "> 10¹² but < 10¹⁴",
        type: "EM Frequency"
    },
    {
        word: "Visible light",
        hint: "= 10¹⁴",
        type: "EM Frequency"
    },
    {
        word: "Ultraviolet",
        hint: "> 10¹⁴ but < 10¹⁶",
        type: "EM Frequency"
    },
    {
        word: "X-ray",
        hint: "> 10¹⁶ but < 10¹⁸",
        type: "EM Frequency"
    },
    {
        word: "Gamma ray",
        hint: "> 10¹⁸",
        type: "EM Frequency"
    },
    {
        word: "Radio waves",
        hint: "< 10⁻¹",
        type: "EM Wavelength"
    },
    {
        word: "Microwave",
        hint: "> 10⁻¹ but < 10⁻⁴",
        type: "EM Wavelength"
    },
    {
        word: "Infrared",
        hint: "> 10⁻⁴ but < 10⁻⁶",
        type: "EM Wavelength"
    },
    {
        word: "Visible light",
        hint: "= 10⁻⁶",
        type: "EM Wavelength"
    },
    {
        word: "Ultraviolet",
        hint: "> 10⁻⁶ but < 10⁻⁸",
        type: "EM Wavelength"
    },
    {
        word: "X-ray",
        hint: "> 10⁻⁸ but < 10⁻¹⁰",
        type: "EM Wavelength"
    },
    {
        word: "Gamma ray",
        hint: "> 10⁻¹⁰",
        type: "EM Wavelength"
    },
    {
        word: "1 kWh",
        hint: "= 1000W × 3600s = 3.6 × 10⁶ J",
        type: "Unit Conversion"
    },
    {
        word: "Distance ÷ Time taken",
        hint: "Speed",
        type: "Formula"
    },
    {
        word: "Displacement ÷ Time taken",
        hint: "Velocity",
        type: "Formula"
    },
    {
        word: "Total distance ÷ Total time taken",
        hint: "Average speed",
        type: "Formula"
    },
    {
        word: "Total displacement ÷ Total time taken",
        hint: "Average velocity",
        type: "Formula"
    },
    {
        word: "(Final velocity - Initial velocity) ÷ Time taken",
        hint: "Acceleration",
        type: "Formula"
    },
    {
        word: "Change of velocity ÷ Time taken",
        hint: "Acceleration",
        type: "Formula"
    },
    {
        word: "(Final velocity - Initial velocity) ÷ Time taken",
        hint: "Uniform acceleration",
        type: "Formula"
    },
    {
        word: "1.6×10^-19",
        hint: "Charge of proton and electron",
        type: "Value"
    },
    {
        word: "10",
        hint: "Acceleration of free fall",
        type: "Value"
    },
    {
        word: "Work done",
        hint: "Potential difference × Current × Time",
        type: "Formula"
    },
    {
        word: "Work done",
        hint: "Current² × Resistance × Time",
        type: "Formula"
    },
    {
        word: "Work done",
        hint: "(Potential difference² × Time) ÷ Resistance",
        type: "Formula"
    },
    {
        word: "Work done",
        hint: "Force × Distance moved in force direction",
        type: "Formula"
    },
    {
        word: "Weight ÷ Gravitational field strength",
        hint: "Mass",
        type: "Formula"
    },
    {
        word: "Mass × Gravitational field strength",
        hint: "Weight",
        type: "Formula"
    },
    {
        word: "Weight ÷ Mass",
        hint: "Gravitational field strength",
        type: "Formula"
    },
    {
        word: "Mass ÷ Volume",
        hint: "Density",
        type: "Formula"
    },
    {
        word: "Force × Perpendicular distance from pivot to line of action of the force",
        hint: "Moment of a force about a pivot",
        type: "Formula"
    },
    {
        word: "Mass × Gravitational field strength × Height",
        hint: "Energy in gravitational potential store",
        type: "Formula"
    },
    {
        word: "Force ÷ Contact area",
        hint: "Pressure",
        type: "Formula"
    },
    {
        word: "Half × Mass × Speed^2",
        hint: "Energy in kinetic store",
        type: "Formula"
    },
    {
        word: "Mass × Acceleration",
        hint: "Resultant force",
        type: "Formula"
    },
    {
        word: "Number of protons",
        hint: "Number of electrons",
        type: "Value"
    },
    {
        word: "Power",
        hint: "Work done ÷ Time taken",
        type: "Formula"
    },
    {
        word: "Power",
        hint: "Energy transferred ÷ Time taken",
        type: "Formula"
    },
    {
        word: "Power",
        hint: "Potential difference × Current",
        type: "Formula"
    },
    {
        word: "Power",
        hint: "Current² × Resistance",
        type: "Formula"
    },
    {
        word: "Power",
        hint: "Potential difference² ÷ Resistance",
        type: "Formula"
    },
    {
        word: "1 ÷ Period",
        hint: "Wave frequency",
        type: "Formula"
    },
    {
        word: "Wavelength ÷ Period",
        hint: "Wave speed",
        type: "Formula"
    },
    {
        word: "Frequency × Wavelength",
        hint: "Wave speed",
        type: "Formula"
    },
    {
        word: "Wave speed ÷ Frequency",
        hint: "Wavelength",
        type: "Formula"
    },
    {
        word: "Wave speed × Period",
        hint: "Wavelength",
        type: "Formula"
    },
    {
        word: "Speed of light in a vacuum ÷ Speed of light in the medium",
        hint: "Refractive index",
        type: "Formula"
    },
    {
        word: "sin(Angle of incidence in a vacuum) ÷ sin(Angle of refraction in the medium)",
        hint: "Refractive index",
        type: "Formula"
    },
    {
        word: "Resistance 1 + Resistance 2 = Total effective resistance",
        hint: "Effective resistance in series circuit",
        type: "Formula"
    },
    {
        word: "Potential difference in series circuit",
        hint: "(Current × Resistance 1) + (Current × Resistance 2)",
        type: "Formula"
    },
    {
        word: "Current 1 = Current 2 = Current 3 = Total effective current",
        hint: "Current in series circuit",
        type: "Formula"
    },
    {
        word: "Potential difference in parallel circuit",
        hint: "(Current × Resistance 1) = (Current × Resistance 2)",
        type: "Formula"
    },
    {
        word: "Potential difference ÷ Current",
        hint: "Resistance",
        type: "Formula"
    },
    {
        word: "Resistivity × (Length of wire ÷ Cross-section area of wire)",
        hint: "Resistance",
        type: "Formula"
    },
    {
        word: "Resistance × (Cross-section area of wire ÷ Length of wire)",
        hint: "Resistivity",
        type: "Formula"
    },
    {
        word: "3×10^8",
        hint: "Speed of EM wave in a vacuum",
        type: "Value"
    },
    {
        word: "Clockwise moment = Anticlockwise moment",
        hint: "Principles of moment",
        type: "Formula"
    },
    {
        word: "Work done ÷ Amount of charge",
        hint: "Electromotive force",
        type: "Formula"
    },
    {
        word: "Work done ÷ Amount of charge",
        hint: "Potential difference",
        type: "Formula"
    },
    {
        word: "Charge ÷ Time taken",
        hint: "Electric current",
        type: "Formula"
    },
    {
        word: "((1 ÷ Resistance 1) + (1 ÷ Resistance 2) + (1 ÷ Resistance 3)) = (1 ÷ Total effective resistance) = (Total effective resistance ÷ 1) = Total effective resistance",
        hint: "Effective resistance in parallel circuit",
        type: "Formula"
    },
    {
        word: "Current 1 + Current 2 + Current 3 = Total effective current",
        hint: "Current in parallel circuit",
        type: "Formula"
    },
    {
        word: "Proton (atomic) number + Number of neutrons",
        hint: "Nucleon number / Relative atomic mass",
        type: "Formula"
    },
    {
        word: "Nucleon number - Proton (atomic) number",
        hint: "Number of neutrons",
        type: "Formula"
    }
];
