$(document).ready(function () {
  const sections = ["#contents", "#motion", "#animation", "#about"];
  const menuItems = $(".page-active li");

  // 윈도우에서 스크롤 이벤트가 발생할 때마다 함수를 실행
  $(window).on("scroll", function () {
    // 현재 보이는 섹션을 저장할 변수 초기화
    let currentSection = "";

    // 섹션 배열에 있는 각 섹션에 대해 반복문 실행
    sections.forEach((section, index) => {
      // 해당 섹션의 화면 상단에서 부터의 위치를 가져옴
      const sectionTop = $(section).offset().top;
      // 현재 페이지의 스크롤된 위치 (위에서 얼마나 스크롤했는지)를 가져옴
      const scrollTop = $(window).scrollTop();

      // 현재 스크롤 위치가 섹션 안에 있을 경우
      if (
        scrollTop >= sectionTop - 100 && // 섹션 상단보다 약간 위쪽부터 시작하여
        scrollTop < sectionTop + $(section).outerHeight() // 섹션의 전체 높이만큼 확인
      ) {
        // 현재 보이는 섹션을 기록
        currentSection = section;
        // 모든 메뉴 항목에서 active 클래스를 제거
        menuItems.removeClass("active");
        // 해당 섹션과 매칭되는 메뉴 항목에 active 클래스를 추가(eq메서드는 해당 인덱스를 기준으로 선택할 때 사용)
        menuItems.eq(index).addClass("active");
      }
    });
  });
});
