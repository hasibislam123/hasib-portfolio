import React from 'react';

// Import Heroicons
import {
    CodeBracketIcon, BeakerIcon, ServerStackIcon, RocketLaunchIcon, ComputerDesktopIcon,
    PuzzlePieceIcon, CommandLineIcon, AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';


// --- Data Structure for Skills ---
const skillData = [
    {
        category: 'Frontend',
        skills: [
            // Using generic yet descriptive Heroicons since there are no dedicated logo icons
            { name: 'HTML', Icon: CodeBracketIcon, color: 'text-orange-500' }, 
            { name: 'CSS', Icon: AdjustmentsHorizontalIcon, color: 'text-blue-600' },
            { name: 'Tailwind', Icon: PuzzlePieceIcon, color: 'text-cyan-500' },
            { name: 'JavaScript', Icon: BeakerIcon, color: 'text-yellow-400' },
            { name: 'React', Icon: RocketLaunchIcon, color: 'text-cyan-400' },
        ]
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', Icon: ServerStackIcon, color: 'text-green-500' },
            { name: 'Express', Icon: CommandLineIcon, color: 'text-gray-800' },
            { name: 'MongoDB', Icon: PuzzlePieceIcon, color: 'text-green-500' },
            { name: 'Firebase', Icon: ComputerDesktopIcon, color: 'text-yellow-500' },
        ]
    },
    {
        category: 'Tools',
        skills: [
            { name: 'Git', Icon: CodeBracketIcon, color: 'text-orange-600' },
            { name: 'VS Code', Icon: AdjustmentsHorizontalIcon, color: 'text-[#48cae4]' },
        ]
    }
];

// --- Helper Component for Skill Badge (Simple glassmorphism for internal badges) ---
const SkillBadge = ({ name, Icon, colorClass }) => (
    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full border border-white/50 text-sm font-medium backdrop-blur-sm shadow-inner transition-all duration-300 hover:scale-[1.05] bg-white/20 dark:bg-neutral-700/50`}>
        <Icon className={`w-4 h-4 ${colorClass}`} />
        <span className="text-gray-800 dark:text-gray-100">{name}</span>
    </div>
);


// --- Main Skill Component ---
export default function Skill() {
    return (
        <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8   flex justify-center items-center">
            
            {/* Subtle background gradient overlay for the colorful blur effect (Glassmorphism base) */}
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="w-1/2 h-full bg-gradient-to-br from-purple-200/50 via-white/50 to-pink-200/50 blur-3xl rounded-full absolute top-[-10%] left-[-10%]"></div>
                <div className="w-1/3 h-full bg-gradient-to-tl from-cyan-200/50 via-white/50 to-indigo-200/50 blur-3xl rounded-full absolute bottom-[-10%] right-[-10%]"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto w-full">
                
                {/* Title Section */}
                <div className="text-center mb-16">
                    <p className="text-sm font-medium text-gray-500 tracking-wider uppercase dark:text-gray-400">Stack</p>
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 dark:text-white mt-2">
                        Skills
                    </h1>
                </div>

                {/* Skills Cards Grid - Using the Uiverse card logic */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
                    
                    {skillData.map((categoryData, index) => (
                        <UiverseCard key={index} category={categoryData.category} skills={categoryData.skills} />
                    ))}
                    
                </div>
            </div>
        </section>
    );
}


// --- Component for the Dynamic Uiverse 3D Card ---
const UiverseCard = ({ category, skills }) => {
    // Determine the shadow colors based on the category for a custom look
    const shadowColors = {
        'Frontend': { primary: 'shadow-sky-500', secondary: 'shadow-yellow-500' },
        'Backend': { primary: 'shadow-green-500', secondary: 'shadow-red-500' },
        'Tools': { primary: 'shadow-indigo-500', secondary: 'shadow-cyan-500' },
    };

    const colors = shadowColors[category] || { primary: 'shadow-gray-500', secondary: 'shadow-gray-500' };

    return (
        // Base Card Container - Adjusted for better responsiveness
        <div 
            className="cursor-pointer group overflow-hidden p-3 duration-1000 hover:duration-1000 relative w-full h-80 bg-neutral-800 rounded-xl max-w-md mx-auto"
            style={{ minHeight: '320px' }} // Ensure a good minimum size
        >
            {/* Dynamic Inner Shadow Elements (Uiverse Effect) */}
            {/* Element 1 */}
            <div
                className={`group-hover:-top-3 bg-transparent -top-12 -left-12 absolute ${colors.secondary} shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24`}
            ></div>
            {/* Element 2 */}
            <div
                className={`group-hover:top-60 bg-transparent top-44 left-14 absolute ${colors.primary} shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24`}
            ></div>
            {/* Element 3 */}
            <div
                className={`group-hover:-left-12 bg-transparent top-24 left-56 absolute ${colors.primary} shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24`}
            ></div>
            {/* Element 4 */}
            <div
                className={`group-hover:-top-44 bg-transparent top-12 left-12 absolute ${colors.secondary} shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12`}
            ></div>
            {/* Element 5 */}
            <div
                className={`group-hover:left-44 bg-transparent top-12 left-12 absolute shadow-green-600 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44`}
            ></div>
            {/* Element 6 */}
            <div
                className={`group-hover:-left-2 bg-transparent -top-24 -left-12 absolute ${colors.primary} shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64`}
            ></div>
            {/* Element 7 */}
            <div
                className={`group-hover:top-44 bg-transparent top-24 left-12 absolute shadow-sky-400 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4`}
            ></div>
            

            {/* Content Container (Inner Layer) */}
            <div
                className="w-full h-full shadow-xl shadow-neutral-900 p-6 bg-neutral-800 opacity-50 rounded-xl flex-col gap-4 flex"
            >
                <h3 className="text-white font-bold text-2xl border-b border-white/50 pb-2">
                    {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, skillIndex) => (
                        <SkillBadge
                            key={skillIndex}
                            name={skill.name}
                            Icon={skill.Icon}
                            colorClass={skill.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};