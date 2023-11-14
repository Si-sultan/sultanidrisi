import { javascript, css ,html , react , wordpress } from "@/assets/skills";
import { semrush , linkbuilding , offpage , onpage , googlesearch, xml , content , keyword , sheets , docs } from "@/assets/skills";
import { mobilerepair, nikestore } from "@/assets/projects";

export const devSkills = [
    {href:html, percent: '90%'},
    {href:css, percent:'80%'},
    {href:wordpress, percent:'70%'},
    {href:xml, percent: '80%'},
    {href: javascript, percent:'65%'},
    {href:react, percent: '65%'},
]

export const seoSkills = [
    {href:offpage, percent: '90%'},
    {href:onpage, percent: '70%'},
    {href:keyword, percent: '55%'},
    {href:content, percent: '55%'},
    {href: linkbuilding, percent:'90%'},
    {href:googlesearch, percent: '80%'},
    { href: semrush, percent:'55%'},
    { href: sheets, percent:'55%'},
    { href: docs, percent:'55%'},

]

export const projects= [
    {image:nikestore, title:"NikeStore",href:"https://nikestore-two.vercel.app/", id: "1", caption: "A simple static website, which is made by Vite framework on top of React JS Technology." },
    {image:mobilerepair, title:"Fixpro",href: "https://mobile-repair-service-website.vercel.app/", id: "2", caption: "Fixpro offers you the option to select any mobile-related repair service at an affordable price and contact them for scheduled services." }

]