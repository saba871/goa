const posts = [
    {
        id: 1,
        title: "First Post",
        author: "Alice",
        comments: ["Great post!", "Thanks for sharing."],
    },
    {
        id: 2,
        title: "Second Post",
        author: "Bob",
        comments: ["Interesting read."],
    },
    {
        id: 3,
        title: "Third Post",
        author: "Charlie",
        comments: ["Nice!", "Very helpful."],
    },
    {
        id: 4,
        title: "Fourth Post",
        author: "Diana",
        comments: ["Awesome!", "Loved it."],
    },
    {
        id: 5,
        title: "Fifth Post",
        author: "Eve",
        comments: ["Good job!"],
    },
];

const getPosts = (req, res) => {
    res.json(posts);
};

const getPost = (req, res) => {
    const { id } = req.params;
    const post = posts.find((el) => el.id === id * 1);

    if (!post) {
        return res.status(404).json({
            status: "fail",
            message: "Post cant be found!",
        });
    }

    res.json(post);
};

const addPost = (req, res) => {
    const { title, author, comments } = req.body;

    if (!title || !author || !comments) {
        return res.status(400).json({
            status: "fail",
            message: "Title, author and comments are required!",
        });
    }

    const post = {
        id: posts[posts.length - 1].id + 1 || 1,
        title,
        author,
        comments,
    };

    posts.push(post);

    res.status(201).json(post);
};

const deletePost = (req, res) => {
    const { id } = req.params;
    const postIndex = posts.findIndex((el) => el.id === id * 1);

    if (postIndex === -1) {
        return res.status(404).json({
            status: "fail",
            message: "Post cant be found!",
        });
    }

    posts.splice(postIndex, 1);

    res.status(204).send();
};

const changePost = (req, res) => {
    const { id } = parseInt(req.params);
    const { title, comments } = req.body;
    const post = posts.find((el) => el.id === id);

    if (!post) {
        return res.status(404).json({
            status: "fail",
            message: "Post cant be found!",
        });
    }

    if (title) post.title = title;
    if (comments) post.comments = comments;

    res.json(post);
};

module.exports = {
    getPost,
    getPosts,
    addPost,
    deletePost,
    changePost,
};

// ROUTE აირს ერთი კონკრეტული მისამართი და მეთოდი
// ROUTER არის Route ების კოლექცია ერთ ფაილში
// CONTROLLER არის ლოგიკა რომელიც მართავს Route ს
