window.addEventListener('load', function() {
    const headerHeight = document.querySelector('.hero h1').offsetHeight;
    const headerMarginTop = parseInt(getComputedStyle(document.querySelector('.hero h1')).marginTop);
    const headerMarginBottom = parseInt(getComputedStyle(document.querySelector('.hero h1')).marginBottom);
    const descriptionHeight = document.querySelector('.right-column p.subtitle').offsetHeight;
    const descriptionMarginTop = parseInt(getComputedStyle(document.querySelector('.right-column p.subtitle')).marginTop);
    const descriptionMarginBottom = parseInt(getComputedStyle(document.querySelector('.right-column p.subtitle')).marginBottom);
    
    const totalHeight = headerHeight + headerMarginTop + headerMarginBottom + descriptionHeight + descriptionMarginTop + descriptionMarginBottom + 20; // 20px отступ
    
    document.querySelector('.arrow').style.top = totalHeight + 'px';
});
