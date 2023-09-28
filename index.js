document.addEventListener("DOMContentLoaded", function() {
    const cells = document.querySelectorAll('td[data-row][data-column]');

    cells.forEach(function(cell) {
        const rowType = cell.getAttribute('data-row');
        const columnType = cell.getAttribute('data-column');

        if (rowType === columnType) {
            const commonBox = document.createElement('span');
            commonBox.className = `box row-${rowType}`;  // using "type-" prefix for CSS styling
            commonBox.textContent = rowType
            cell.prepend(commonBox);
        } else {
            const columnBox = document.createElement('span');
            columnBox.className = `box column-${columnType}`;
            columnBox.textContent = columnType
            cell.prepend(columnBox);  // adds the column box at the beginning of the cell, before the row box

            const rowBox = document.createElement('span');
            rowBox.className = `box row-${rowType}`;
            rowBox.textContent = rowType
            cell.prepend(rowBox);  // adds the row box at the beginning of the cell
        }
        
        const images = cell.querySelectorAll('img');
        images.forEach(function(img) {
            var src = img.getAttribute('src');
            var basepath = src.split('/').pop();
            var filenameWithoutExtension = basepath.split('.')[0];
            img.setAttribute('alt', filenameWithoutExtension);

            const tooltip = document.createElement('span');
            tooltip.className = 'tooltip';
            tooltip.textContent = img.alt;
            if (img.parentNode) {
                img.parentNode.insertBefore(tooltip, img.nextSibling);
            }

        });

        const imgCount = images.length;
        if (imgCount > 0) {
            const countContainer = cell.querySelector('.image-count');
            if (countContainer) {
                countContainer.textContent = `Count: ${imgCount}`;
            }
            // cell.insertAdjacentHTML('beforeend', ` Count:${imgCount}`);
        }

        // const imageContainers = Array.from(cell.querySelectorAll('div[data-order]'));
        // const sortedContainers = imageContainers.sort((a, b) => {
        //     return parseInt(a.getAttribute('data-order'), 10) - parseInt(b.getAttribute('data-order'), 10);
        // });

        // sortedContainers.forEach(imgContainer => {
        //     cell.appendChild(imgContainer); // re-append in sorted order
        // });
        
    });
});
