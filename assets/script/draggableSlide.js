function draggbleSlide(property, propertyItem, icons) {
    let draggable = document.querySelector(property);
    let draggableItem = draggable.querySelector(propertyItem);
    let arrowIcons = document.querySelectorAll(icons);
    
    let scrollWidth = draggable.clientWidth;
    
    if (scrollWidth <= (1023 - (30 * 2))) {
        let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
    
        const showHideIcons = () => {
            let scrollWidth = draggable.scrollWidth - draggable.clientWidth;
            arrowIcons[0].style.display = draggable.scrollLeft == 0 ? "none" : "block";
            arrowIcons[1].style.display = draggable.scrollLeft == scrollWidth ? "none" : "block";
        }
    
        arrowIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                let draggableItemWidth = draggableItem.clientWidth + 30;
                draggable.scrollLeft += icon.id == "left" ? -draggableItemWidth : draggableItemWidth;
                setTimeout(() => showHideIcons(), 60);
            });
        });
    
        const autoSlide = () => {
            if (draggable.scrollLeft - (draggable.scrollWidth - draggable.clientWidth) > -1 || draggable.scrollLeft <= 0) return;
            positionDiff = Math.abs(positionDiff);
            let draggableItemWidth = draggableItem.clientWidth + 14;
            let valDifference = draggableItemWidth - positionDiff;
            if (draggable.scrollLeft > prevScrollLeft) {
                return draggable.scrollLeft += positionDiff > draggableItemWidth / 3 ? valDifference : -positionDiff;
            }
            draggable.scrollLeft -= positionDiff > draggableItemWidth / 3 ? valDifference : -positionDiff;
        }
        const dragStart = (e) => {
            isDragStart = true;
            prevPageX = e.pageX || e.touches[0].pageX;
            prevScrollLeft = draggable.scrollLeft;
        }
        const dragging = (e) => {
            if (!isDragStart) return;
            e.preventDefault();
            isDragging = true;
            draggable.classList.add("js-dragging");
            positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
            draggable.scrollLeft = prevScrollLeft - positionDiff;
            showHideIcons();
        }
    
        const dragStop = () => {
            isDragStart = false;
            draggable.classList.remove("js-dragging");
            if (!isDragging) return;
            isDragging = false;
            autoSlide();
        }
    
        draggable.addEventListener("mousedown", dragStart);
        draggable.addEventListener("touchstart", dragStart);
        document.addEventListener("mousemove", dragging);
        draggable.addEventListener("touchmove", dragging);
        document.addEventListener("mouseup", dragStop);
        draggable.addEventListener("touchend", dragStop);
    }
}

draggbleSlide('.js-services-card', '.js-services-card-item', '.js-services-body .js-services-arrow-icon');
draggbleSlide('.js-article-card', '.js-article-card-item', '.js-article-body .js-article-arrow-icon');

