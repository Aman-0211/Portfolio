"use client"
import Image from "next/image";
import React,{ useState, useTransition } from "react";
import TabButton from "@/app/components/TabButton";

const TAB_DATA = [
    {
        title: 'Skills',
        id:'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React Js</li>
                <li>Next Js</li>
                <li>React Native</li>
                <li>Redux | Redux Saga | Redux Thunk | Redux ToolKit</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Sequelize</li>
                <li>PostgreSQl</li>
                <li>Python</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id:'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>BSC In Computer Science</li>
                <li>University of Mumbai, Thakur College</li>
            </ul>
        )
    },
    {
        title: 'Certification',
        id:'certification',
        content: (
            <ul className='list-disc pl-2'>
                <li>AWS Cloud Practitioner</li>
                <li>Restfull Api</li>
                <li>React Js</li>
                <li>Node.js</li>
            </ul>
        )
    },
    {
        title: 'Experience',
        id:'experience',
        content: (
            <ul className='list-disc pl-2'>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React Js</li>
                <li>Next Js</li>
                <li>React Native</li>
                <li>Redux | Redux Saga | Redux Thunk | Redux ToolKit</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Sequelize</li>
                <li>PostgreSQl</li>
                <li>Python</li>
            </ul>
        )
    }

]


const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange =(id)=>{
        startTransition(()=>{
            setTab(id)
        });
    }
  return (
    <section>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/images/hero-section.png"} width={600} height={600} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base md:text-lg'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            iste necessitatibus tenetur quasi. Eveniet eos necessitatibus
            dolores harum accusamus adipisci error neque magni, quos, nihil
            itaque eligendi dolor ipsam ex! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Voluptatem tenetur sed dicta maxime
            eaque tempora, pariatur nulla accusantium repellendus reprehenderit
            soluta ea sit cum at odio commodi facilis corrupti deserunt! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa
            facere, tempore aliquam magni vel corporis rerum provident optio
            repellendus, deserunt inventore, illum molestiae possimus quia
            corrupti laudantium exercitationem quibusdam?
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={()=>handleTabChange('skills')} active={tab === 'skills'}>Skills</TabButton>
            <TabButton selectTab={()=>handleTabChange('education')} active={tab === 'education'}>Education</TabButton>
            <TabButton selectTab={()=>handleTabChange('certification')} active={tab === 'certification'}>Certifications</TabButton>
            <TabButton selectTab={()=>handleTabChange('experience')} active={tab === 'experience'}>Experience</TabButton>
        </div>
        <div className='mt-8'>
            {TAB_DATA?.find((t)=> t.id === tab).content}
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
