<template>
  <!-- Footer -->
  <footer class="bg-dark text-center text-white">
    <!-- Grid container -->
    <div class="container p-4">
      <!-- Section: Text -->
      <section class="mb-4">
        <p>
          (50595) 경상남도 양산시 물금읍 황산로 733-21 | TEL: 055-387-2941
        </p>
      </section>
      <!-- Section: Text -->

      <!-- Section: Links -->
      <section>
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>
              학교 소개
            </h5>

            <ul class="list-unstyled mb-0">
              <li>
                <RouterLink
                  :to="'/SchoolIntroduction/PastorGreeting'"
                  class="text-white nav-link">
                  학교장 인사말
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="'/SchoolIntroduction/SchoolHistory'"
                  class="text-white nav-link">
                  학교 연혁
                </RouterLink>
              </li>
              <!-- <li>
                <RouterLink
                  :to="'/SchoolIntroduction/PhilosophyEducation'"
                  class="text-white nav-link">
                  교육 철학
                </RouterLink>
              </li> -->
              <li>
                <RouterLink
                  :to="'/SchoolIntroduction/SchoolFacilities'"
                  class="text-white nav-link">
                  학교 시설
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="'/SchoolIntroduction/SchoolHistory'"
                  class="text-white nav-link">
                  학교 연혁
                </RouterLink>
              </li>
            </ul>
          </div>
          <!--Grid column-->
  
          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5>
              교육 정보
            </h5>

            <!-- <ul class="list-unstyled mb-0">
              <li>
                <RouterLink
                  :to="'/EducationInfo/AcademicCalendar'"
                  class="text-white nav-link">
                  학사 일정
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="'/EducationInfo/Curriculum'"
                  class="text-white nav-link">
                  커리큘럼
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="'/EducationInfo/RecruitmentGuide'"
                  class="text-white nav-link">
                  입학 FAQ
                </RouterLink>
              </li>
            </ul> -->
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">
              입학 안내
            </h5>

            <ul class="list-unstyled mb-0">
              <li>
                <RouterLink
                  :to="'/AdmissionGuide/RecruitmentGuide'"
                  class="text-white nav-link">
                  모집 요강
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="'/AdmissionGuide/EducationExpenses'"
                  class="text-white nav-link">
                  교육비 안내
                </RouterLink>
              </li>
              <!-- <li>
                <RouterLink
                  :to="'/AdmissionGuide/ConsultationInquiry'"
                  class="text-white nav-link">
                  상담 문의
                </RouterLink>
              </li> -->
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">
              국크 이야기
            </h5>

            <ul class="list-unstyled mb-0">
              <li>
                <RouterLink
                  :to="'/board/BoardList'"
                  class="text-white nav-link">
                  학생 게시판
                </RouterLink>
              </li>
              <!-- <li>
                <RouterLink
                  :to="'/SchoolStory/SchoolActivities'"
                  class="text-white nav-link">
                  학교 활동
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="'/SchoolStory/NoticeBoard'"
                  class="text-white nav-link">
                  학생 마당
                </RouterLink>
              </li> -->
            </ul>
          </div>
        </div>
      </section>
    </div>
    <div
      class="text-center p-3"
      style="background-color: rgba(0, 0, 0, 0.2);">
      © 2022 Copyright Onnuri International Christian Academy. ALL RIGHT RESERVED
    </div>
  </footer>
</template>

<style scoped lang="scss">
  
  .row {
    margin: 0 auto;
  }

    li{
        margin-bottom: 5px;
        &:first-child{
            margin-top: 20px;
        }
    }
    h5 {
        font-weight: bold;
    }
    @media (max-width: 1000px) {
        li{
            margin-bottom: 10px;
        }
    }
</style>