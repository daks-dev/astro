import confetti from 'canvas-confetti';

export default ({
  delay = 500,
  count = 400,
  velocity = 40,
  spread = Math.min(window.innerWidth, window.innerHeight) * 0.8,
  origin = {
    x: 0.5, // Math.random(),
    y: 0.35 //Math.random() - 0.2
  }
}) =>
  window.addEventListener('load', () =>
    setTimeout(
      () =>
        confetti({
          particleCount: count,
          startVelocity: velocity,
          spread,
          origin
        }),
      delay
    )
  );
