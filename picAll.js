(function() {
    let msg = document.querySelector('.uk-alert.uk-alert-danger.uk-text-center')?.innerText;
    if (!!msg && msg.includes('vip观看')) {
        //debugger;
        let regex = /http(s)?:[\w.\/\\-]+\.(jpg|png|gif){1}/g;
        let imgText = document.querySelector('#jameson_manhua').children[8].innerText;
        let imgList = imgText.match(regex);
        let mapRes = imgList.map((cur, index, arr) => { return cur.replaceAll('\\', ''); })
        console.log(mapRes);

        let doc = document.querySelector('.uk-alert.uk-alert-danger.uk-text-center');
        var myDiv = document.createElement('div');
        doc.appendChild(myDiv); // 将图片添加到文档的body末尾

        mapRes.forEach((val, idx) => {
            // 创建一个img元素
            var img = document.createElement('img');

            // 设置img元素的src属性
            img.src = val;

            // 设置img元素的其他属性，如alt
            img.alt = '描述文本';

            // 可以设置更多属性，如class、id等
            img.id = 'yourImageId';
            img.className = 'yourImageClass';

            // 将img元素插入到DOM中
            myDiv.appendChild(document.createElement('p')).appendChild(img); // 将图片添加到文档的body末尾
        })
    }
})();
