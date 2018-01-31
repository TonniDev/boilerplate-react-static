const breakpoint =  {
    small: {
        size: 320,
        block: 40,
        spaceBtw: 10,
        spaceArd: 15
    },
    large: {
        size: 1366,
        block: 70,
        spaceBtw: 30,
        spaceArd: 98
    }
};

const media = (qtd) => {
    let allA = {}
    let mQuery = ``

    qtd.map( function(item, index) {
        Object.keys(breakpoint).filter(function(k, i) {
            return k;
        }).forEach(function(k) {
             allA[k] = `@media (min-width: ${breakpoint[k].size - 1}px){
               width: ${(item * breakpoint[k].block) + ((item - 1) * breakpoint[k].spaceBtw)}px;
               &:not(:first-child) {
                 margin-left: ${breakpoint[k].spaceBtw}px;
               }
             }`
             mQuery += allA[k]
        });
    })
    return mQuery
}


const container = () => {
    let allA = {}
    let mQuery = ``
    Object.keys(breakpoint).filter(function(k, i) {
        return k;
    }).forEach(function(k) {
         allA[k] = `
            flex-direction: column;
            @media (min-width: ${breakpoint[k].size - 1}px){
           width: ${(breakpoint[k].size) - (breakpoint[k].spaceArd * 2)}px;
           margin: 0 auto;
         }`
         mQuery += allA[k]
    });
    console.log('bla')
    return mQuery
}

export {breakpoint, media, container}