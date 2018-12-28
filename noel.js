```
    const data = [8,1];
    data.forEach( arr => {
      new Array(arr).fill('').forEach((v,item) => {
        let a = new Array(8-item).fill('.');
        let b = new Array(1+item).fill('*^*');
        let noel = [ ...a, ...b, ...a ].join('.');
        console.log(noel);
      });
    });
```
