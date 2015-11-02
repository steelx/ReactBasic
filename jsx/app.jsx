var options = {
    thumbnailData: [
        {
            title: 'React Courses',
            number: 15,
            header: 'Learn React',
            description: 'React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node',
            imageUrl: 'https://facebook.github.io/react/img/logo_og.png'
        },
        {
            title: 'Gulp Courses',
            number: 80,
            header: 'Learn Gulp',
            description: 'Build system automating tasks: minification and copying of all JavaScript files, static images, capable of watching files to automatically rerun the task',
            imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
        },
        {
            title: 'Node Courses',
            number: 80,
            header: 'Learn Node JS',
            description: 'Node.js is a JavaScript runtime built on Chrome s V8 JavaScript engine.',
            imageUrl: 'http://code-maven.com/img/node.png'
        }
    ]
};

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));
