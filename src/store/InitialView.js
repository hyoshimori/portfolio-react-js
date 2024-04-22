export const initialProps = {
    profileProps: {
        name: "Hiroto Yoshimori",
        message:
            "Junior System Engineer. Creative Developer. Trilingual language professional.",
        codingLanguages: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Python",
            "Elixir",
        ],
        imageURL: "https://i.imgur.com/WMs2A0m.png",
        bannerImageURL:
            "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=2204&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        instagramURL: "https://www.instagram.com/hiro_y_photo/",
        birthday: "1991-12-09",
        joinedDate: "2022-06-22",
    },
    postProps: [
        {
            id: "1",
            message:
                "Next new is a platform where collected news via New York Times API.",
            name: "Hiroto Yoshimori",
            time: "2023-01",
            title: "Next News",
            emotion: "🌟 Exciting",
            imageURL: "https://i.imgur.com/WMs2A0m.png",
            projectImageUrl: "https://i.imgur.com/93q6Jwo.png",
            pinned: true,
            status: "Offline",
        },
        {
            id: "2",
            message:
                "This is a first project I have worked on. Support Your Ngo is a platform where companies and NGOs who are looking for some contribution can connect.",
            name: "Hiroto Yoshimori",
            time: "2022-10",
            title: "Support Your Ngo",
            emotion: "🍀 Feelin Fresh",
            imageURL: "https://i.imgur.com/WMs2A0m.png",
            projectImageUrl: "https://i.imgur.com/fIY8i4k.png",
            pinned: true,
            status: "Offline",
        },
        // {
        //     id: "3",
        //     message:
        //         "Poke deck is a platform where you can see all pokemons from the first generation. Next js is used for this project to demonstrate the basic understanding of CSR, SSG, and ISG.",
        //     name: "Hiroto Yoshimori",
        //     time: "2024-03",
        //     title: "Poke deck",
        //     emotion: "🌈 Peace",
        //     imageURL: "https://i.imgur.com/WMs2A0m.png",
        //     projectImageUrl: "https://i.imgur.com/QiJ1Jfz.png",
        //     pinned: false,
        // },
    ],
    aboutProps: {
        title: "System Engineer",
        about: "Hey! My name is Hiroto. I have worked for a French start-up as a translator in Paris, where I became passionate about coding. Now, I work as a System Engineer in Tokyo!",
    },
    contentProps: {
        content: "content",
    },
    experienceProps: [
        {
            id: "1",
            title: "System Engineer",
            company: "CYCNUS Co., Ltd. - Tokyo, Japan",
            date: "Dec 2023 - Present",
            description: "Role: Contract development",
            technologies:
                "Technologies: Python, JavaScript, HTML, CSS, React, Pyppeteer",
        },
        {
            id: "2",
            title: "Fullstack Javascript Engineer",
            company: "Lunaris GK - Tokyo, Japan",
            date: "Jun 2023 - Nov 2023",
            description: "Role: In-house development",
            technologies:
                "Technologies: JavaScript, Elixir, React, Phoenix, HTML, CSS, Liquid",
        },
    ],
};

export default initialProps;
