document.getElementById('more-info-btn').addEventListener('click', function() {
    var moreInfo = document.getElementById('more-info');
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        this.textContent = 'Show Less';
    } else {
        moreInfo.classList.add('hidden');
        this.textContent = 'More Info';
    }
});
