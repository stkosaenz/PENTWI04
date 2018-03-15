function butter(...x) {
    let a = [1, 2, 3, ...x];
    return a;
}

butter(4, 5, 6);
