// actions: string
export const actions1 =
    'resize,m_fill,w_300,h_300,limit_0/auto-orient,0/quality,q_90/watermark,image_cGFuZGEucG5n,t_61,g_se,y_10,x_10';

// actions: { [name: Name]: Params }
// params: string
export const actions2 = {
    resize: 'm_fill,w_300,h_300,limit_0',
    'auto-orient': '0',
    quality: 'q_90',
    watermark: 'image_cGFuZGEucG5n,t_61,g_se,y_10,x_10',
};

// actions: { [name: Name]: Params }
// params: { [key: string]: string }
export const actions3 = {
    resize: {
        m: 'fill',
        w: '300',
        h: '300',
        limit: '0',
    },
    'auto-orient': {
        '': '0',
    },
    quality: {
        q: '90',
    },
    watermark: {
        image: 'cGFuZGEucG5n',
        t: '61',
        g: 'se',
        y: '10',
        x: '10',
    },
};

// actions: { [name: Name]: Params }
// params: Array<string>
export const actions4 = {
    resize: ['m_fill', 'w_300', 'h_300', 'limit_0'],
    'auto-orient': ['0'],
    quality: ['q_90'],
    watermark: ['image_cGFuZGEucG5n', 't_61', 'g_se', 'y_10', 'x_10'],
};

// actions: { [name: Name]: Params }
// parmas: Array<{
//     key: string;
//     value: string;
// }>
export const actions5 = {
    resize: [
        {
            key: 'm',
            value: 'fill',
        },
        {
            key: 'w',
            value: '300',
        },
        {
            key: 'h',
            value: '300',
        },
        {
            key: 'limit',
            value: '0',
        },
    ],
    'auto-orient': [
        {
            key: '',
            value: '0',
        },
    ],
    quality: [
        {
            key: 'q',
            value: '90',
        },
    ],
    watermark: [
        {
            key: 'image',
            value: 'cGFuZGEucG5n',
        },
        {
            key: 't',
            value: '61',
        },
        {
            key: 'g',
            value: 'se',
        },
        {
            key: 'y',
            value: '10',
        },
        {
            key: 'x',
            value: '10',
        },
    ],
};

// actions: Array<string>
export const actions6 = [
    'resize,m_fill,w_300,h_300,limit_0',
    'auto-orient,0',
    'quality,q_90',
    'watermark,image_cGFuZGEucG5n,t_61,g_se,y_10,x_10',
];

// actions: Array<{
//     name: Name;
//     params: Params;
// }>
// params: string
export const actions7 = [
    {
        name: 'resize',
        params: 'm_fill,w_300,h_300,limit_0',
    },
    {
        name: 'auto-orient',
        params: '0',
    },
    {
        name: 'quality',
        params: 'q_90',
    },
    {
        name: 'watermark',
        params: 'image_cGFuZGEucG5n,t_61,g_se,y_10,x_10',
    },
];

// actions: Array<{
//     name: Name;
//     params: Params;
// }>
// params: { [key: string]: string }
export const actions8 = [
    {
        name: 'resize',
        params: {
            m: 'fill',
            w: '300',
            h: '300',
            limit: '0',
        },
    },
    {
        name: 'auto-orient',
        params: {
            '': '0',
        },
    },
    {
        name: 'quality',
        params: {
            q: '90',
        },
    },
    {
        name: 'watermark',
        params: {
            image: 'cGFuZGEucG5n',
            t: '61',
            g: 'se',
            y: '10',
            x: '10',
        },
    },
];

// actions: Array<{
//     name: Name;
//     params: Params;
// }>
// params: Array<string>
export const actions9 = [
    {
        name: 'resize',
        params: ['m_fill', 'w_300', 'h_300', 'limit_0'],
    },
    {
        name: 'auto-orient',
        params: ['0'],
    },
    {
        name: 'quality',
        params: ['q_90'],
    },
    {
        name: 'watermark',
        params: ['image_cGFuZGEucG5n', 't_61', 'g_se', 'y_10', 'x_10'],
    },
];

// actions: Array<{
//     name: Name;
//     params: Params;
// }>
// parmas: Array<{
//     key: string;
//     value: string;
// }>
export const actions10 = [
    {
        name: 'resize',
        params: [
            {
                key: 'm',
                value: 'fill',
            },
            {
                key: 'w',
                value: '300',
            },
            {
                key: 'h',
                value: '300',
            },
            {
                key: 'limit',
                value: '0',
            },
        ],
    },
    {
        name: 'auto-orient',
        params: [
            {
                key: '',
                value: '0',
            },
        ],
    },
    {
        name: 'quality',
        params: [
            {
                key: 'q',
                value: '90',
            },
        ],
    },
    {
        name: 'watermark',
        params: [
            {
                key: 'image',
                value: 'cGFuZGEucG5n',
            },
            {
                key: 't',
                value: '61',
            },
            {
                key: 'g',
                value: 'se',
            },
            {
                key: 'y',
                value: '10',
            },
            {
                key: 'x',
                value: '10',
            },
        ],
    },
];
