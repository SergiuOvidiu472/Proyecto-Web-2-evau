/*---------------------------------------------------------------------------------------------*/
/*DOOM*/
/*---------------------------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.neon-button');
    const stories = document.querySelectorAll('.story');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Quitar clase 'active' de todos los botones
            buttons.forEach(btn => btn.classList.remove('active'));
            // Añadir clase 'active' al botón clicado
            button.classList.add('active');

            // Ocultar todas las historias
            stories.forEach(story => story.classList.add('hidden'));
            // Mostrar la historia correspondiente
            const gameId = button.getAttribute('data-game');
            const selectedStory = document.getElementById(gameId);
            selectedStory.classList.remove('hidden');
        });
    });
});