const printNumbers = () => {
    for (let i = 1; i <= 100; i++) {
        let output = '';
        if (i % 3 === 0) output += 'kossu';
        if (i % 5 === 0) output += 'vissy';
        console.log(output || i);
    }
}

printNumbers()