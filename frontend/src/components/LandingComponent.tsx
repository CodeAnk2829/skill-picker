import { useState } from 'react';
import { SKILLS } from '../utils/skill';

export default function LandingComponent() {
    const [skillList, setSkillList] = useState<string[]>(SKILLS);
    const [skill, setSkill] = useState<string[]>([]);
    // const path_name = import.meta.env.VITE_BACKEND_URL;

    // useEffect(() => {
    //     fetch(path_name)
    //         .then(async (res) => {
    //             const json = await res.json();
    //             setSkillList(json.skills);
    //             console.log(json.skills)
    //         })
    // }, []);


    async function handleClick(skill: string, key: number) {
        const selectedSkill: string = skill;
        setSkill(skill => [...skill, selectedSkill]);
        setSkillList(skillList.filter((value, index) => index != key));
        skillList.sort();
    }

    async function buttonHandler(key: number) {
        // remove the selected skill from the skill sections
        const removedSkill = skill[key];
        setSkill(skill.filter((value, index) => { return index != key }));
        setSkillList((s: string[]) => [...s, removedSkill]);
        skillList.sort();
    }

    async function buttonHandlerToDeleteAll() {
        setSkillList((s) => {
            const newSKillSet = [...s];
            skill.forEach((skillValue) => {
                newSKillSet.push(skillValue);
            });
            return newSKillSet;
        });
        skillList.sort();
        setSkill([]);
    }

    return (
        <div className='flex flex-col items-center p-5 h-screen w-full justify-center text-center sm:text-left'>
            <div className='grid grid-cols-8 content-center h-20 md:w-1/2 sm:w-1/2 w-1/2 max-w-screen-sm bg-white mb-5 text-balance p-1 pl-3 border-2 border-slate-300 rounded-sm'>
                <div className='col-span-7 overflow-y-scroll scrollbar-hide'>
                    {/* make another component */}
                    {skill.map((value, key) => {
                        return (
                            <div className='bg-slate-200 h-5 inline-block p-1 text-xs font-medium text-slate-600 rounded-md mr-2' key={key}>
                                <div className='mr-1 rounded-md flex '>{value}
                                    <button className='
                                    hover:bg-slate-200 
                                    p-0.5 
                                    rounded-sm'
                                        onClick={() => {
                                            buttonHandler(key)
                                        }}
                                    >
                                        <svg className="h-3 w-3 text-slate-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='flex justify-end'>
                    <button onClick={buttonHandlerToDeleteAll}>
                        <svg className="h-5 w-5 text-slate-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </button>
                </div>
            </div>
            <div className='h-60 md:w-1/2 sm:w-1/2 max-w-screen-sm w-1/2 bg-white overflow-y-auto scrollbar-hide border-2 border-slate-300 rounded-sm'>
                <ul role='list'>
                    {skillList.map((skill, key) => {
                        return <li key={key} className='group/item  h-10 p-3  cursor-pointer content-center' onClick={() => handleClick(skill, key)}>
                            <div className='hover:bg-violet-200 hover: rounded-md p-2 text-slate-500 font-medium'>{skill}</div>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}