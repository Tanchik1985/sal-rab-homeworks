function renderCartItem(item) {
    const product = item;
       console.log(product.count);
       console.log(product.price);
    
       let itemCountText = "";
    // 2. Присвойте переменной itemCountText результат склеивания itemCountText и количества
          itemCountText = `${itemCountText}${product.count}`;                   
    // 3. Присвойте переменной itemCountText результат склеивания itemCountText и ` × `
          itemCountText = `${itemCountText} × `;   
    // 4. Присвойте переменной itemCountText результат склеивания itemCountText и цены
          itemCountText = `${itemCountText}${product.price}`;   
    // 5. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽ = `
           itemCountText = `${itemCountText} ₽ = `;   
    // 6. Создайте переменную sum и присвойте ей значение произведения количества и цены
          let sum = product.count*product.price;
    // 7. Присвойте переменной itemCountText результат склеивания itemCountText и sum
          itemCountText = `${itemCountText}${sum}`;
          itemCountText = `${itemCountText} ₽`;  
    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
