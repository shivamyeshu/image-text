const T = require('tesseract.js')
const path = require('path');

const image = path.join(__dirname,'image.png')

T.recognize(image,'eng',{logger: (e)=>{console.log(e);
}})
    .then(out => console.log(out.data.text))
    .catch(e => console.error(e));
