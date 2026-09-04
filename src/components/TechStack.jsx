import React from 'react'
import lan1 from "/src/assets/languages/html-5.png";
import lan2 from "/src/assets/languages/react-js.png";
import lan3 from "/src/assets/languages/wordpress.png";
import lan4 from "/src/assets/languages/wordpress-dark.png";
import lan5 from "/src/assets/languages/swift-ui.png";
import lan6 from "/src/assets/languages/php.png";
import lan7 from "/src/assets/languages/php-dark.png";
import lan8 from "/src/assets/languages/tailwind-css.svg";
import js from "/src/assets/languages/javascript.png";
import lan9 from "/src/assets/languages/elementor.png";
import lan10 from "/src/assets/languages/wix.png";
import lan11 from "/src/assets/languages/node-js.svg";


const techStack = [
    {
        category: "Backend",
        technologies: [
            { name: "PHP", icon: lan6, darkIcon: lan7 },
            { name: "Node.js", icon: lan11 }
        ]
    },
    {
        category: "Frontend",
        technologies: [
            { name: "HTML", icon: lan1 },
            { name: "JavaScript", icon: js },
            { name: "React", icon: lan2 },
            { name: "React Native", icon: lan2 },
            { name: "Swift", icon: lan5 },
            { name: "Tailwind CSS", icon: lan8 }
        ]
    },
    {
        category: "CMS",
        technologies: [
            { name: "WordPress", icon: lan3, darkIcon: lan4 },
            { name: "Wix", icon: lan10 },
            { name: "Elementor", icon: lan9 }
        ]
    }
];


const TechStack = () => {
    return (
        <div
            id="techstack"
            className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12"
        >

            <div className="text-center">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-8">
                    Tech Stack
                </h2>
            </div>


            <div className="grid md:grid-cols-3 gap-4">

                {techStack.map((category) => (

                    <div key={category.category}>

                        <div className="text-center">
                            <h3 className="text-3xl text-primary-light font-semibold mb-4">
                                {category.category}
                            </h3>
                        </div>


                        <div className="rounded-lg bg-white shadow-lg p-5 flex flex-wrap gap-8 justify-center text-gray-500 dark:text-gray-400">

                            {category.technologies.map((tech) => (

                                <div
                                    key={tech.name}
                                    className="flex flex-col justify-center items-center"
                                >

                                    <img
                                        className="w-20 h-20 rounded-full dark:hidden"
                                        src={tech.icon}
                                        alt={tech.name}
                                    />

                                    <img
                                        className="w-20 h-20 rounded-full hidden dark:inline-block"
                                        src={tech.darkIcon ?? tech.icon}
                                        alt={tech.name}
                                    />

                                    <span>{tech.name}</span>

                                </div>

                            ))}

                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default TechStack