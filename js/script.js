$(document).ready(function () {
  const sections = ["#contents", "#motion", "#animation", "#about"];
  const menuItems = $(".page-active li");
  const navLinks = $(".navi li");

  // 스크롤 이벤트 처리
  $(window).on("scroll", function () {
    let currentSection = "";

    sections.forEach((section, index) => {
      const sectionTop = $(section).offset().top;
      const scrollTop = $(window).scrollTop();

      // 현재 스크롤 위치가 해당 섹션 안에 있는지 확인
      if (
        scrollTop >= sectionTop - 100 &&
        scrollTop < sectionTop + $(section).outerHeight()
      ) {
        currentSection = section;

        // page-active에 있는 메뉴 항목을 활성화
        menuItems.removeClass("active");
        menuItems.eq(index).addClass("active");

        // 네비게이션 메뉴 항목도 활성화
        navLinks.removeClass("active");
        navLinks.eq(index).addClass("active");
      }
    });
  });

  // 네비게이션 메뉴 클릭 시 처리
  navLinks.click(function () {
    // 모든 네비게이션 메뉴에서 active 클래스를 제거
    navLinks.removeClass("active");

    // 클릭된 메뉴에 active 클래스 추가
    $(this).addClass("active");
  });

  // page-active에 있는 메뉴 클릭 시 처리
  menuItems.click(function () {
    // 모든 page-active 메뉴에서 active 클래스를 제거
    menuItems.removeClass("active");

    // 클릭된 메뉴에 active 클래스 추가
    $(this).addClass("active");
  });
});
