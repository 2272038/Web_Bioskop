document.addEventListener('DOMContentLoaded', function () {
  var table = document.getElementById('myTable');
  
  table.addEventListener('click', function (event) {
      var target = event.target;

      // Check if the clicked element is a td
      if (target.tagName.toLowerCase() === 'td') {
          // Check if it's the 8th cell or the last row
          if (target.cellIndex === 7 || target.parentNode.rowIndex === table.rows.length - 1) {
              return; // Do nothing for the 8th cell and the last row
          }

          // Toggle background color between red and green
          if (target.style.backgroundColor === 'red') {
              target.style.backgroundColor = 'green';
          } else {
              target.style.backgroundColor = 'red';
          }
      }
  });
});
