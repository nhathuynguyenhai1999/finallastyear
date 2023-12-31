document.addEventListener("DOMContentLoaded", function() {
  // Dữ liệu mẫu
  const products = [
    { id: 1, name: "Iphone 11 promax 512gb" },
    { id: 2, name: "Iphone 12 promax 1024gb" },
    { id: 3, name: "Macbook Pro" }
  ];

  // Hiển thị danh sách sản phẩm
  function displayProducts() {
    const table = document.getElementById("productTable");
    // Xóa các dòng hiện tại trong bảng
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }

    // Thêm dòng mới cho mỗi sản phẩm
    products.forEach(product => {
      const row = table.insertRow(-1);
      row.insertCell(0).textContent = product.id;
      row.insertCell(1).textContent = product.name;
      const editButton = document.createElement("button");
      editButton.textContent = "Sửa";
      editButton.onclick = function() { editProduct(product.id); };
      row.insertCell(2).appendChild(editButton);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Xoá";
      deleteButton.onclick = function() { deleteProduct(product.id); };
      row.insertCell(3).appendChild(deleteButton);
    });
  }

  // Thêm sản phẩm mới
  function addProduct() {
    const name = prompt("Nhập tên sản phẩm:");
    if (name) {
      const newProduct = {
        id: products.length + 1,
        name: name
      };
      products.push(newProduct);
      displayProducts();
    }
  }

  // Sửa tên sản phẩm
  function editProduct(id) {
    const newName = prompt("Nhập tên mới cho sản phẩm:");
    if (newName) {
      const product = products.find(p => p.id === id);
      if (product) {
        product.name = newName;
        displayProducts();
      }
    }
  }

  // Xoá sản phẩm
  function deleteProduct(id) {
    const confirmDelete = confirm("Bạn có chắc muốn xoá sản phẩm này?");
    if (confirmDelete) {
      const index = products.findIndex(p => p.id === id);
      if (index !== -1) {
        products.splice(index, 1);
        displayProducts();
      }
    }
  }

  // Hiển thị sản phẩm khi trang được tải
  displayProducts();

  // Gán sự kiện cho nút Thêm sản phẩm mới
  document.getElementById("addProductButton").onclick = addProduct;
});
