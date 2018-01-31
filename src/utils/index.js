//const req = require.context('./components', true, /^(?!.*styles).*\/(?!.*stories).*\.js$/)


export const __addModule = (__req, __mappedComp)=>{
    const mappedComp = {}
    __req
        .keys()
        .forEach(filename =>  {
            let objects = __req(filename);
            Object.getOwnPropertyNames(objects)
                .filter(function(name){
                if(name === "__esModule" || name === "default") return false;
                return true;
                })
                .forEach(function(name){
                    __mappedComp[name] = objects[name]
                })
            }
        );
}

export const getColor = (props)=>{
    //let cor1 = props.color ? props.color : "#000";
    let cor = props.themeColor ? props.themeColor : '#000000'
    return cor
  }