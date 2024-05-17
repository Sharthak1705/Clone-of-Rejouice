function ent(){

document.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('cursor1');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

const cursor1 = document.getElementById('cursor1');
document.body.addEventListener('mouseenter', () => {
    cursor1.classList.add('hover');
});
document.body.addEventListener('mouseleave', () => {
    cursor1.classList.remove('hover');
});


}
ent();

function dddd(){
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor1');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    });

    document.querySelectorAll('.circle1, .circle2, .rotating-svg').forEach(el => {
        observer.observe(el);
    });
});
}
dddd();

