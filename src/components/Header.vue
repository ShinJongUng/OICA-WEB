<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-md">
      <a
        class="navbar-brand"
        href="#">
        <img
          src="../assets/logo_header.png"
          alt=""
          width="250" /></a>
      <!-- mediaquery 반응형 버튼 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navBarHeader"
        aria-controls="navBarHeader"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navBarHeader">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="true">
              학교 소개
            </a>
            <ul
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink">
              <li
                class="nav-item"
                v-for="nav in first_menu"
                :key="nav.name">
                <RouterLink
                  :to="nav.href"
                  class="nav-link">
                  {{ nav.name }}
                </RouterLink>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="true">
              교육 정보
            </a>
            <ul
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink">
              <li
                class="nav-item"
                v-for="nav in second_menu"
                :key="nav.name">
                <RouterLink
                  :to="nav.href"
                  class="nav-link">
                  {{ nav.name }}
                </RouterLink>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="true">
              입학 안내
            </a>
            <ul
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink">
              <li
                class="nav-item"
                v-for="nav in third_menu"
                :key="nav.name">
                <RouterLink
                  :to="nav.href"
                  class="nav-link">
                  {{ nav.name }}
                </RouterLink>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="true">
              국크 이야기
            </a>
            <ul
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink">
              <li
                class="nav-item"
                v-for="nav in fourth_menu"
                :key="nav.name">
                <RouterLink
                  :to="nav.href"
                  class="nav-link">
                  {{ nav.name }}
                </RouterLink>
              </li>
            </ul>
          </li>

          <li class="nav-item come-to-school">
            <RouterLink
              to="/RoadMap"
              class="nav-link">
              오시는 길
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template> 

<script>
  export default {
    data() {
      return {
        first_menu: [
          {
            name: '이사장 인사말',
            href: '/SchoolIntroduction/PastorGreeting'
          },
          {
            name: '학교 연혁',
            href: '/SchoolIntroduction/SchoolHistory'
          },
          {
            name: '교육 철학',
            href: '/SchoolIntroduction/PhilosophyEducation'
          },
          {
            name: '교직원 소개',
            href: '/SchoolIntroduction/TeacherIntroduction'
          },
          {
            name: '학교 시설',
            href: '/SchoolIntroduction/SchoolFacilities'
          }
        ],
        second_menu: [
          {
            name: '학사 일정',
            href: '/EducationInfo/AcademicCalendar'
          },
          {
            name: '커리큘럼',
            href: '/EducationInfo/Curriculum'
          },
          {
            name: '입학 FAQ',
            href: '/EducationInfo/AdmissionFAQ'
          }
        ],
        third_menu: [
          {
            name: '모집 요강',
            href: '/AdmissionGuide/RecruitmentGuide'
          },
          {
            name: '교육비 안내',
            href: '/AdmissionGuide/EducationExpenses'
          },
          {
            name: '상담 문의',
            href: '/AdmissionGuide/ConsultationInquiry'
          }
        ],
          fourth_menu: [
          {
            name: '학교 소식',
            href: '/SchoolStory/SchoolNews'
          },
          {
            name: '학교 활동',
            href: '/SchoolStory/SchoolActivities'
          },
          {
            name: '학생 마당',
            href: '/SchoolStory/NoticeBoard'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  
  .dropdown{
    padding-left: 25px;
    .nav-item{
    padding-left: 10px;
    }
  }
  

  .come-to-school{
    padding-left: 25px;
  }
  
</style>