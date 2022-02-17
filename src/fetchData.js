const productData = [
    {
        id: '123',
        title: 'Viltrox AF 23mm f/1.4 XF Lens for FUJIFILM X (Limited Edition)',
        brand: 'Viltrox',
        price: 37900,
        description: 'X-Mount Lens/APS-C Format, Aperture Range: f / 1.4 to f/ 16, 35mm(35mm Equivalent), Two ED Elements, Two HR Elements',
        image: 'https://www.bhphotovideo.com/images/images2500x2500/viltrox_af_23_1_4_xf_r_af_23mm_f_1_4_lens_1666764.jpg',
    },
    {
        id: '456',
        title: 'Viltrox AF 33mm f/1.4 XF Lens for FUJIFILM X (Limited Edition)',
        brand: 'Viltrox',
        price: 32900,
        description: 'XF-Mount Lens/APS-C Format, 50mm(35mm Equivalent), Aperture Range: f / 1.4 to f/ 16, One ED Element, One HR Element',
        image: 'https://www.bhphotovideo.com/images/images2500x2500/viltrox_af_33_1_4_xf_r_af_33mm_f_1_4_lens_1666765.jpg',
    },
    {
        id: '789',
        title: 'Viltrox AF 56mm f/1.4 XF Lens for FUJIFILM X (Limited Edition)',
        brand: 'Viltrox',
        price: 37900,
        description: 'X-Mount Lens/APS-C Format, 85mm(35mm Equivalent), Aperture Range: f / 1.4 to f/ 16, One ED Element, One HR Element',
        image: 'https://www.bhphotovideo.com/images/images2500x2500/viltrox_af_56_1_4_xf_r_af_56mm_f_1_4_lens_1666766.jpg',
    },
];

export const fetchProducts = () => new Promise((resolve, reject) => {

    setTimeout(() => {
        try {
            resolve(productData)
        } catch (error) {
            reject(error);
        }
    }, 1000);
});