// Get the ball element in variable
const ball = document.querySelector('#ball');

// Set the Movement Speed
const moveSpeed = 0.2;

// Add touch event listeners to move the ball forward
ball.addEventListener('click', () => {
    const currentPosition = ball.getAttribute('position');

    ball.setAttribute('position', {
       x: currentPosition.x,
       y: currentPosition.y,
       z: currentPosition.z - moveSpeed
    });
});

