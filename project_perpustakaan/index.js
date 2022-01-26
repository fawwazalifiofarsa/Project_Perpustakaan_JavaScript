var app = new function() {
    this.length = document.getElementById('tabel');
    this.nisn = [];
    this.nama = [];
    this.buku = [];
    this.tgl = [];
    this.Count = function(data) {
      var length = document.getElementById('counter');
      var name = 'tabel';
    };
    
    this.FetchAll = function() {
      var data = '';
      if (this.nisn.length > 0) {
        for (i = 0; i < this.nisn.length; i++) {
          data += '<tr>';
          data += '<td>' + this.nisn[i] + '</td>';
          data += '<td>' + this.nama[i] + '</td>';
          data += '<td>' + this.buku[i] + '</td>';
          data += '<td>' + this.tgl[i] + '</td>';
          data += '<td><button class="btn btn-info" onclick="app.Edit(' + i + ')">Edit</button> | <button class="btn btn-danger" onclick="app.Delete(' + i + ')">Delete</button></td>';
          data += '</tr>';
        }
      }
      this.Count(this.nisn.length);
      return this.length.innerHTML = data;
    };
    this.Add = function () {
      var addNisn = document.getElementById('add-nisn');
      var addNama = document.getElementById('add-nama');
      var addBuku = document.getElementById('add-buku');
      var addTgl = document.getElementById('add-tgl');
      // Get the value
      var nisn = addNisn.value;
      var nama = addNama.value;
      var buku = addBuku.value;
      var tgl = addTgl.value;
      if (nisn && nama && buku && tgl) {
        // Add the new value
        this.nisn.push(nisn.trim());
        this.nama.push(nama.trim());
        this.buku.push(buku.trim());
        this.tgl.push(tgl.trim());
        // Reset input value
        addNisn.value = '';
        addNama.value = '';
        addBuku.value = '';
        addTgl.value = '';
        // Dislay the new list
        this.FetchAll();
      }
    };
    this.Edit = function (item) {
      var editNisn = document.getElementById('edit-nisn');
      var editNama = document.getElementById('edit-nama');
      var editBuku = document.getElementById('edit-buku');
      var editTgl = document.getElementById('edit-tgl');
      // Display value in the field
      editNisn.value = this.nisn[item];
      editNama.value = this.nama[item];
      editBuku.value = this.buku[item];
      editTgl.value = this.tgl[item];
      // Display fields
      document.getElementById('spoiler').style.display = 'block';
      self = this;
      document.getElementById('saveEdit').onsubmit = function() {
        // Get value
        var nisn = editNisn.value;
        var nama = editNama.value;
        var buku = editBuku.value;
        var tgl = editTgl.value;
        if (nisn && nama && buku && tgl) {
        // Edit value
        self.nisn.splice(item, 1, nisn.trim());
        self.nama.splice(item, 1, nama.trim());
        self.buku.splice(item, 1, buku.trim());
        self.tgl.splice(item, 1, tgl.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
        }
      }
    };
    this.Delete = function (item) {
      // Delete the current row
      this.nisn.splice(item, 1);
      this.nama.splice(item, 1);
      this.buku.splice(item, 1);
      this.tgl.splice(item, 1);
      // Display the new list
      this.FetchAll();
    };
}