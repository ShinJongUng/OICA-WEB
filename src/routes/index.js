import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
//first Page
import PastorGreeting from './SchoolIntroduction/PastorGreeting';
import PhilosophyEducation from './SchoolIntroduction/PhilosophyEducation';
import SchoolFacilities from './SchoolIntroduction/SchoolFacilities';
import SchoolHistory from './SchoolIntroduction/SchoolHistory';
import TeacherIntroduction from './SchoolIntroduction/TeacherIntroduction';
//second Page
import Curriculum from './EducationInfo/Curriculum'
import AdmissionFAQ from './EducationInfo/AdmissionFAQ'
import AcademicCalendar from './EducationInfo/AcademicCalendar'
//third Page
import ConsultationInquiry from './AdmissionGuide/ConsultationInquiry'
import EducationExpenses from './AdmissionGuide/EducationExpenses'
import RecruitmentGuide from './AdmissionGuide/RecruitmentGuide'
//fourth Page
import NoticeBoard from './SchoolStory/NoticeBoard'
import SchoolActivities from './SchoolStory/SchoolActivities'
import SchoolNews from './SchoolStory/SchoolNews'
//roadMap Page
import RoadMap from './Map.vue'


export default createRouter({
    //hash mode or history
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        component: Home
        },
        {
            path: '/SchoolIntroduction/PastorGreeting',
            component: PastorGreeting
        },
        {
            path: '/SchoolIntroduction/PhilosophyEducation',
            component: PhilosophyEducation
        },
        {
            path: '/SchoolIntroduction/SchoolFacilities',
            component: SchoolFacilities
        },
        {
            path: '/SchoolIntroduction/SchoolHistory',
            component: SchoolHistory
        },
        {
            path: '/SchoolIntroduction/TeacherIntroduction',
            component: TeacherIntroduction
        },
        {
            path: '/EducationInfo/Curriculum',
            component: Curriculum
        },
        {
            path: '/EducationInfo/AdmissionFAQ',
            component: AdmissionFAQ
        },
        {
            path: '/EducationInfo/AcademicCalendar',
            component: AcademicCalendar
        },
        {
            path: '/AdmissionGuide/ConsultationInquiry',
            component: ConsultationInquiry
        },
        {
            path: '/AdmissionGuide/EducationExpenses',
            component: EducationExpenses
        },
        {
            path: '/AdmissionGuide/RecruitmentGuide',
            component: RecruitmentGuide
        },
        {
            path: '/SchoolStory/NoticeBoard',
            component: NoticeBoard
        },
        {
            path: '/SchoolStory/SchoolActivities',
            component: SchoolActivities
        },
        {
            path: '/SchoolStory/SchoolNews',
            component: SchoolNews
        },
        {
            path: '/RoadMap',
            component: RoadMap
        }
    ]
});
