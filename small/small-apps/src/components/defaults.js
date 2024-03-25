const vrsDefault = {
    'info': {
        'cases': 'case keys are concatenated characters answering the assessments list items in the specified order',
        'characters': { 'T': true, 'F': false, '?': 'Any' },
        'assessments': [
            'Nearside',
            'Hardstrip',
            'Kerbed',
            'Edgeline',
        ],
    },
    'options': {
        'smart_motorway': false,
        'hardstrip_threshold_width': 0.6,
        'left_nearside_assess': true,
        'left_offside_assess': true,
        'right_nearside_assess': true,
        'right_offside_assess': true,
    },
    'cases': {
        'TT??': { 'anchor_line': 'EdgeOfRoad', 'setback': 0.6, 'barrier': 'Steel Barrier' },
        'TFT?': { 'anchor_line': 'Kerb', 'setback': 1.2, 'barrier': 'Steel Barrier' },
        'TFF?': { 'anchor_line': 'WhiteLine', 'setback': 1.2, 'barrier': 'Steel Barrier' },
        'F??T': { 'anchor_line': 'WhiteLine', 'setback': 1.2, 'barrier': 'Concrete' },
        'F??F': { 'anchor_line': 'Kerb', 'setback': 1.2, 'barrier': 'Concrete' },
    },
    'working_width_override': {
        'start': [31500, 31600],
        'end': [31600, 31650],
        'LO': [2, 3],
        'LN': [3, null],
        'RO': [4, null],
        'RN': [5, 4]
    },
    'solutions': {
        'Steel Barrier': {
            'sided': 'single',
            'barrier': [
                [(0, -0.5), (0, 0.5), (0.1, 0.5), (0.1, -0.5)],
                [(-0.2, -0.75), (-0.2, 0), (0.3, 0), (0.3, -0.75)]
            ],
            'working_width': 2.0,
        },
        'Concrete': {
            'sided': 'double',
            'barrier': [[(-0.387, -0.25), (-0.17, 0.8), (0.17, 0.8), (0.387, -0.25)]],
            'working_width': 0.0,
        },
        'No VRS': {
            'sided': 'single',
            'barrier': [[(0, 0), (0, 0), (0, 0), (0, 0)]],
            'working_width': 0.0,
        },
    }
}

const drainageDefault =
{
    "info": {
        "cases": "case keys are concatenated characters answering the assessments list items in the specified order",
        "characters": { "T": true, "F": false, "?": "Any", "C": "Cutting", "G": "At Grade", "E": "embankment below threshold height", "L": "embankment above threshold height" },
        "assessments": [
            "Lowside",
            "Nearside",
            "Centralreserve",
            "Superelevated",
            "Kerbed",
            "Earthworks Classification",
            "Granular Embankment",
            "Groundwater Problem",
            "Wide Gully Spacing",
            "High Gradient (Longfall)",
        ],
        "solutions": "solution keys pair solutions to their geometry",
        "geometry": {
            "anchor": "feartureline type to be used as basis of placement",
            "hard": "list of lists containing polygon uv points relative to the anchor line for hard clash areas",
            "soft": "list of lists containing polygon uv points relative to the anchor line for soft clash areas",
        }
    },
    "options": {
        "granular_embankment": true,
        "groundwater_problem": false,
        "wide_gully_spacing": false,
        "at_grade_tolerance": 1.2,  
        "large_embankment_tolerance": 2.0,
        "high_gradient_tolerance": 0.05,
        "left_nearside_assess": true,
        "left_offside_assess": true,
        "right_nearside_assess": true,
        "right_offside_assess": true,
    },
    "cases": {
        "FT???C????": ["Filter Drain"],
        "FT???G????": ["Narrow Filter Drain"],
        "FFF??C????": ["Filter Drain"],
        "FFF??G????": ["Narrow Filter Drain"],
        "TT??TC?FT?": ["Kerb and Gully"],
        "TT??TC?TT?": ["Kerb and Gully"],
        "TT??TC?FF?": ["CDK"],
        "TT??TC?TF?": ["CDK"],
        "TT??TG?FT?": ["Kerb and Gully"],
        "TT??TG?TT?": ["Kerb and Gully"],
        "TT??TG?FF?": ["CDK"],
        "TT??TG?TF?": ["CDK"],
        "TT??TL?FT?": ["Kerb and Gully + NFD"],
        "TT??TL?FF?": ["CDK + NFD"],
        "TT??FC?F?T": ["Combined Filter Drain", "Grassed Surface Water Channel + NFD", "Slot Drain", "Surface Water Channel + NFD"],
        "TT??FC?T?T": ["Combined Filter Drain", "Grassed Surface Water Channel", "Slot Drain + NFD"],
        "TT??FC?F?F": ["Surface Water Channel + NFD"],
        "TT??FC?T?F": ["Surface Water Channel"],
        "TT??FG?F?T": ["Combined Filter Drain", "Grassed Surface Water Channel + NFD", "Slot Drain", "Surface Water Channel + NFD"],
        "TT??FG?T?T": ["Combined Filter Drain", "Grassed Surface Water Channel", "Slot Drain + NFD"],
        "TT??FG?F?F": ["Surface Water Channel + NFD"],
        "TT??FG?T?F": ["Surface Water Channel"],
        "TT??FL?F?T": ["Combined Filter Drain", "Grassed Surface Water Channel + NFD", "Slot Drain", "Surface Water Channel"],
        "TT??FL?F?F": ["Surface Water Channel"],
        "TT??FEFF?T": ["Combined Filter Drain", "Grassed Surface Water Channel + NFD", "Slot Drain", "Surface Water Channel"],
        "TT??FEFF?F": ["Surface Water Channel"],
        "TT??FETF??": ["Over the Edge"],
        "TFTTTC?FT?": ["Kerb and Gully"],
        "TFTTTC?TT?": ["Kerb and Gully"],
        "TFTTTC?FF?": ["CDK"],
        "TFTTTC?TF?": ["CDK"],
        "TFTTTG?FT?": ["Kerb and Gully"],
        "TFTTTG?TT?": ["Kerb and Gully"],
        "TFTTTG?FF?": ["CDK"],
        "TFTTTG?TF?": ["CDK"],
        "TFTTTL?FT?": ["Kerb and Gully + NFD"],
        "TFTTTL?FF?": ["CDK + NFD"],
        "TFTTFC?F?T": ["Combined Filter Drain", "Grassed Surface Water Channel + NFD", "Slot Drain", "Surface Water Channel + NFD"],
        "TFTTFC?T?T": ["Combined Filter Drain", "Grassed Surface Water Channel", "Slot Drain + NFD", "Surface Water Channel"],
        "TFTTFC?F?F": ["Surface Water Channel + NFD"],
        "TFTTFC?T?F": ["Combined Filter Drain"],
        "TFTTFG?F?T": ["Combined Filter Drain", "Grassed Surface Water Channel + NFD", "Slot Drain", "Surface Water Channel + NFD"],
        "TFTTFG?T?T": ["Combined Filter Drain", "Grassed Surface Water Channel", "Slot Drain + NFD", "Surface Water Channel"],
        "TFTTFG?F?F": ["Surface Water Channel + NFD"],
        "TFTTFG?T?F": ["Combined Filter Drain"],
        "TFTTFL?F?T": ["Combined Filter Drain", "Grassed Surface Water Channel + NFD", "Slot Drain", "Surface Water Channel"],
        "TFTTFL?F?F": ["Surface Water Channel"],
        "TFTTFE?F?T": ["Combined Filter Drain", "Grassed Surface Water Channel + NFD", "Slot Drain", "Surface Water Channel"],
        "TFTTFE?T?F": ["Surface Water Channel"],
        "FFTF?C?F??": ["Narrow Filter Drain CR"],
        "FFTF?C?T??": ["Narrow Filter Drain CR"],
        "FFTF?G?F??": ["Narrow Filter Drain CR"],
        "FFTF?G?T??": ["Narrow Filter Drain CR"],
        "FFTF?L?F??": ["No Drainage"],
        "FFTF?E?F??": ["No Drainage"],
        "FFF??C?F??": ["Filter Drain"],
        "FFF??C?T??": ["Filter Drain"],
        "FFF??G?F??": ["No Drainage"],
        "FFF??G?T??": ["Narrow Filter Drain"],
        "FFF??L?F??": ["No Drainage"],
        "FFF??E?F??": ["No Drainage"],
    },
    "solutions": {
        "Filter Drain": {
            "anchor": "EdgeOfRoad",
            "hard": [[(0.25, -0.431), (0.25, -2.431), (1.0, -2.431), (1.0, -0.431)]],
            "soft": [[(-0.275, -0.031), (-0.275, -3.031), (1.825, -3.031), (1.825, -0.031)]],
            "moves_vrs": true,
            "vrs_offset": 0.150
        },
        "Narrow Filter Drain": {
            "anchor": "",
            "hard": [[(0.625, -0.231), (0.625, -1.606), (0.825, -1.606), (0.825, -0.231)]],
            "soft": [[(0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0)]],
            "moves_vrs": true,
            "vrs_offset": 0.150
        },
        "Kerb and Gully": {
            "anchor": "",
            "hard": [[(0.364, -0.304), (0.364, -2.304), (1.114, -2.304), (1.114, -0.304)]],
            "soft": [[(0.15, 0.125), (0.15, -2.875), (2.25, -2.875), (2.25, 0.125)],
            [(0.0, 0.0), (-0.65, 0.0), (-0.65, -1.2), (0.0, -1.2)]],
            "moves_vrs": true,
            "vrs_offset": 0.025
        },
        "CDK": {
            "anchor": "",
            "hard": [[(0.363, -0.304), (0.363, -2.304), (1.113, -2.304), (1.113, -0.304)]],
            "soft": [[(0.15, 0.125), (0.15, -2.875), (2.25, -2.875), (2.25, 0.125)]],
            "moves_vrs": true,
            "vrs_offset": 0.025
        },
        "Kerb and Gully + NFD": {
            "anchor": "",
            "hard": [[(0.3, -0.13), (0.3, -1.505), (0.5, -1.505), (0.5, -0.13)],
            [(0.7, -0.775), (0.7, -2.275), (1.7, -2.275), (1.7, -0.775)]],
            "soft": [[(0.125, 0.125), (0.125, -2.875), (2.225, -2.875), (2.225, 0.125)],
            [(0, 0), (-0.65, 0), (-0.65, -1.2), (0, -1.2)]],
            "moves_vrs": true,
            "vrs_offset": 0.025
        },
        "CDK + NFD": {
            "anchor": "",
            "hard": [[(0.3, -0.13), (0.3, -1.505), (0.5, -1.505), (0.5, -0.13)],
            [(0.7, -0.775), (0.7, -2.275), (1.7, -2.275), (1.7, -0.775)]],
            "soft": [[(0.15, 0.125), (0.15, -2.875), (2.25, -2.875), (2.25, 0.125)]],
            "moves_vrs": true,
            "vrs_offset": 0.025
        },
        "Combined Filter Drain": {
            "anchor": "",
            "hard": [[(0.25, -0.431), (0.25, -2.431), (1.0, -2.431), (1.0, -0.431)]],
            "soft": [[(-0.275, -0.031), (-0.275, -3.031), (1.825, -3.031), (1.825, -0.031)]],
            "moves_vrs": true,
            "vrs_offset": 0.150
        },
        "Grassed Surface Water Channel + NFD": {
            "anchor": "",
            "hard": [[(0.2, -0.4), (0.2, -1.775), (0.4, -1.775), (0.4, -0.4)],
            [(0.517, -0.409), (0.517, -2.409), (1.517, -2.409), (1.517, -0.409)]],
            "soft": [[(0, 0), (0, -3.0), (2.1, -3.0), (2.1, 0.0)]],
            "moves_vrs": true,
            "vrs_offset": 0.025
        },
        "Slot Drain": {
            "anchor": "",
            "hard": [[(0, 0), (-0.037, -0.75), (0.593, -0.750), (0.555, 0.0)],
            [(0.555, 0.0), (0.555, -2.0), (1.305, -2.0), (1.305, 0.0)]],
            "soft": [[(0, 0), (0, -3.0), (2.1, -3.0), (2.1, 0)]],
            "moves_vrs": true,
            "vrs_offset": 0.025
        },
        "Surface Water Channel + NFD": {
            "anchor": "",
            "hard": [[(0, 0), (0, -0.995), (1.29, -1.028), (1.29, 0.025)],
            [(1.29, -0.428), (1.29, -1.803), (1.49, -1.803), (1.49, -0.428)],
            [(0.077, -1.007), (0.077, -2.507), (1.077, -2.507), (1.077, -1.007)]],
            "soft": [[(-0.223, -0.107), (-0.223, -3.107), (1.877, -3.107), (1.877, -0.107)]],
            "moves_vrs": true,
            "vrs_offset": 0.025
        },
        "Grassed Surface Water Channel": {
            "anchor": "",
            "hard": [[(0.85, -0.431), (0.85, -2.431), (1.6, -2.431), (1.6, -0.431)]],
            "soft": [[(0, -0.031), (0, -3.031), (2.1, -3.031), (2.1, -0.031)]],
            "moves_vrs": true,
            "vrs_offset": 0.025
        },
        "Slot Drain + NFD": {
            "anchor": "",
            "hard": [[(0, 0), (-0.037, -0.75), (0.593, -0.750), (0.555, 0.0)],
            [(0.593, -0.550), (0.593, -1.895), (0.793, -1.895), (0.793, -0.550)],
            [(0.793, -0.907), (0.793, -2.407), (1.793, -2.407), (1.793, -0.907)]],
            "soft": [[(0, 0), (0, -3.0), (2.1, -3.0), (2.1, 0)]],
            "moves_vrs": true,
            "vrs_offset": 0.025
        },
        "Surface Water Channel": {
            "anchor": "",
            "hard": [[(0, 0), (0, -0.995), (1.29, -1.028), (1.29, 0.025)],
            [(1.218, -0.39), (1.218, -2.39), (1.968, -2.39), (1.968, -0.39)]],
            "soft": [[(0, -0.107), (0, -3.107), (2.097, -3.107), (2.097, -0.107)]],
            "moves_vrs": true,
            "vrs_offset": 0.025
        },
        "Over the Edge": {
            "anchor": "Earthworks",
            "hard": [[(1.0, 0.0), (2.5, -0.85), (3.0, -0.85), (4.8, 0.0)]],
            "soft": [[(0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0)]],
            "moves_vrs": false,
            "vrs_offset": 0.000
        },
        "No Drainage": {
            "anchor": "",
            "hard": [[(0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0)]],
            "soft": [[(0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0)]],
            "moves_vrs": false,
            "vrs_offset": 0.000
        },
        "Combined Filter Drain CR": {
            "anchor": "CR Drainage",
            "hard": [[(-0.375, 0.0), (-0.375, -2.5), (0.375, -2.5), (0.375, 0)]],
            "soft": [[(-0.9, 0.0), (-0.9, -3.0), (1.2, -3.0), (1.2, 0)]],
            "moves_vrs": true,
            "vrs_offset": 0.150
        },
        "Narrow Filter Drain CR": {
            "anchor": "CR Drainage",
            "hard": [[(0.5, -0.370), (0.5, -1.745), (0.7, -1.745), (0.7, -0.37)]],
            "soft": [[(0.0, 0.0), (0.0, 0.0), (0.0, 0.0), (0.0, 0.0)]],
            "moves_vrs": true,
            "vrs_offset": 0.150
        }
    }
}

const defaults = {
    vrs: vrsDefault,
    drainage: drainageDefault
}

export default defaults;