<!-- src/components/PersonalInformation.vue -->
<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal-content">
      <h3>이용약관 및 개인정보 처리방침</h3>
      <div class="modal-body">
        <div class="desc">
          <ol>
            <li>
              <h5>제 1조. 개인정보의 처리목적</h5>
              <p>
                ① 물류창고업 화재안전정보시스템은 대국민 서비스 제공 및 민원처리, 소관업무 수행 등의
                목적으로 필요에 의한 최소한으로 개인정보를 처리하고 있습니다.
              </p>
              <p>
                ② 제1항에 대한 사항은 홈페이지에 게재하여 정보주체가 확인할 수 있도록 안내를 하고
                있습니다.
              </p>
            </li>
            <li>
              <h5>제 2조. 개인정보의 처리 및 보유기간</h5>
              <p>
                ① 물류창고업 화재안전정보시스템에서 처리하는 개인정보는 수집 · 이용 목적으로 명시한
                범위 내에서 처리하며, 개인 정보 보호법 및 관련 법령에서 정하는 보유기간을 준용하여
                이행하고 있습니다.
              </p>
              <p>② 각각의 개인정보 및 보유 기간은 다음과 같습니다.</p>
              <ol class="grp">
                <li>1. 홈페이지 회원정보 : 정보주체의 동의에 의해 회원 탈퇴 시까지/</li>
                <li></li>
                <li>2. 물류창고업정보 : 준영구 보유</li>
                <li>3. 물류창고 담당자 개인정보 : 5년</li>
                <li>4. 지자체, 소방서 담당자 개인정보 : 5년</li>
              </ol>
            </li>
            <li>
              <h5>제 3조. 처리하는 개인정보 항목</h5>
              <p>
                <em>※ 홈페이지 회원가입</em>- 필수항목 : 아이디, 패스워드, 휴대전화번호, 이메일,
                (기업회원)회사명
              </p>
              <p><em>※ 물류창고업 정보</em>- 필수항목 : 이름, 회사명, 일반전화번호, 회사주소명</p>
              <p>
                <em>※ 물류창고 담당자</em>- 필수항목 : 성명(한글), (일반전화번호 또는 휴대전화번호),
                이메일주소
              </p>
              <p>
                <em>※ 지자체, 소방서 담당자</em>- 필수항목 : 성명(한글), (일반전화번호 또는
                휴대전화번호), 이메일주소
              </p>
            </li>
            <li>
              <h5>제 4조. 개인정보 제3자 제공에 관한 사항</h5>
              <p>
                ① 물류창고업 화재안전정보시스템은 원칙적으로 정보주체의 개인정보를 수집 · 이용
                목적으로 명시한 범위 내에서 처리하며, 아래의 경우를 제외하고는 정보주체의 사전 동의
                없이는 본래의 목적 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.
              </p>
              <ol class="grp">
                <li>1. 정보주체로부터 별도의 동의를 받는 경우</li>
                <li>2. 법률에 특별한 규정이 있는 경우</li>
                <li>
                  3. 정보주체 또는 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로
                  사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체,
                  재산의 이익을 위하여 필요하다고 인정되는 경우
                </li>
                <li>
                  4. 개인정보를 목적 외의 용도로 이용하거나 이를 제3자에게 제공하지 아니하면 다른
                  법률에서 정하는 소관 업무를 수행할 수 없는 경우로서 보호위원회의 심의 · 의결을
                  거친 경우
                </li>
                <li>
                  5. 조약, 그 밖의 국제협정의 이행을 위하여 외국정보 또는 국제기구에 제공하기 위하여
                  필요한 경우
                </li>
                <li>6. 범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우</li>
                <li>7. 법원의 재판업무 수행을 위하여 필요한 경우</li>
                <li>8. 형 및 감호, 보호처분의 집행을 위하여 필요한 경우</li>
              </ol>
            </li>
            <li>
              <h5>제 5조. 개인정보처리 위탁에 관한 사항</h5>
              <p>
                ① 개인정보 처리를 위탁하는 경우 관련사항은 각 부서에서 운영하는 소관 홈페이지에
                게재하여 정보주체가 확인할 수 있도록 안내를 하고 있으며, 국토교통부가 법령 및 기타
                개별법에 근거하여 위탁하고 있습니다.
              </p>
              <ul class="grp">
                <li>※ 수탁기관명 : 한국통합물류협회</li>
                <li>※ 업무의 내용 : 전화상담 응대, 물류관련 정보제공 등</li>
              </ul>
              <p>
                ② 물류창고업 화재안전정보시스템은 개인정보의 처리업무를 위탁하는 경우 아래의 내용이
                포함된 문서에 의하여 처리하고 있습니다.
              </p>
              <ol class="grp">
                <li>1. 위탁업무 수행 목적 외 개인정보의 처리 금지에 관한 사항</li>
                <li>2. 개인정보의 관리적 · 기술적 보호조치에 관한 사항</li>
                <li>
                  3. 개인정보의 안전관리에 관한 사항 <br />
                  위탁업무의 목적 및 범위, 재위탁 제한에 관한 사항, 개인정보 안전성 확보 조치에 관한
                  사항, 위탁업무와 관련하여 보유하고 있는 개인정보의 관리현황점검 등 감독에 관한
                  사항, 수탁자가 준수하여야 할 의무를 위반한 경우의 손해배상책임에 관한 사항 또한,
                  위탁하는 업무의 내용과 개인정보 처리업무를 위탁 받아 처리하는 자(“수탁자”)에
                  대하여 해당 홈페이지에 공개하고 있습니다.
                </li>
              </ol>
            </li>
            <li>
              <h5>제 6조. 정보주체의 권리 · 의무 및 그 행사 방법에 관한 사항</h5>
              <ol>
                <li>
                  <p>
                    ① 정보주체는 아래와 같은 권리를 행사 할 수 있으며, 만14세 미만 아동의
                    법정대리인은 그 아동의 개인정보 에 대한 열람, 정정 · 삭제, 처리정지를 요구할 수
                    있습니다.
                  </p>
                  <ol class="grp">
                    <li>1. 개인정보 열람요구</li>
                    <li>2. 오류 등이 있을 경우 정정 요구</li>
                    <li>3. 삭제요구</li>
                    <li>4. 처리정지 요구</li>
                  </ol>
                </li>
                <li>
                  ② 제1항에 따른 권리 행사는 개인정보 처리방법에 관한 고시 별지 제8호 서식에 따라
                  작성 후 서면, 전자우편, 모사 전송(FAX) 등을 통하여 하실 수 있으며, 이에 대해 지체
                  없이 조치하겠습니다.
                </li>
                <li>
                  ③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 정정 또는
                  삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
                </li>
                <li>
                  ④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을
                  통하여 하실 수 있습니다. 이 경우 개인정보 처리방법에 관한 고시 별지 제11호 서식에
                  따른 위임장을 제출하셔야 합니다.
                </li>
                <li>
                  ⑤ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제4항, 제37조 제2항에
                  의하여 정보주체의 권 리가 제한될 수 있습니다.
                </li>
                <li>
                  ⑥ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로
                  명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
                </li>
                <li>
                  ⑦ 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등
                  요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
                </li>
              </ol>
              <p>
                * [개인정보 처리방법에 관한 고시 별지 제8호] 개인정보(열람, 정정·삭제, 처리정지)
                요구서
              </p>
              <p>* [개인정보 처리방법에 관한 고시 별지 제11호] 위임장</p>
            </li>
            <li>
              <h5>제 7조. 개인정보의 파기</h5>
              <p>
                물류창고업 화재안전정보시스템은 원칙적으로 개인정보 처리목적이 달성된 개인정보는
                지체없이 파기하며, 파기의 절차, 기한 및 방법은 아래와 같습니다.
              </p>
              <ol>
                <li>
                  ① 파기 절차 개인정보는 목적 달성 후 즉시 또는 별도의 공간에 옮겨져 내부 방침 및
                  기타 관련법령에 따라 일정기간 저장된 후 파기됩니다. 별도의 공간으로 옮겨진
                  개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.
                </li>
                <li>
                  ② 파기 기한 및 파기 방법 보유기간이 만료되었거나 개인정보의 처리목적달성, 해당
                  업무의 폐지 등 그 개인 정보가 불필요하게 되었을 때에는 지체 없이 파기합니다.
                  전자적 파일형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 종이에
                  출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
                </li>
              </ol>
            </li>
            <li>
              <h5>제 8조. 개인정보 자동 수집 장치의 설치 · 운영 및 그 거부에 관한 사항</h5>
              <ol>
                <li>
                  ① 물류창고업 화재안전정보시스템은 이용자에게 개별적인 맞춤서비스를 제공하기 위해
                  이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
                </li>
                <li>
                  ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에
                  보내는 소량의 정보이며 이용자의 PC 컴퓨터 내의 하드디스크에 저장되기도 합니다
                </li>
              </ol>
              <div class="grp">
                가. 쿠키의 사용목적 : 이용자가 방문한 각 서비스와 웹사이트들에 대한 방문 및
                이용형태, 인기 검색어, 보안접속 여부 등을 파악하여 이용자에게 최적화된 정보 제공을
                위해 사용됩니다. <br />
                나. 쿠키의 설치 · 운영 및 거부 : 웹브라우저 상단의 도구&gt;인터넷 옵션&gt;개인정보
                메뉴의 옵션 설정을 통해 쿠키 저장을 거 부 할 수 있습니다.다. 쿠키 저장을 거부할 경우
                맞춤형 서비스 이용에 어려움이 발생 할 수 있습니다.
              </div>
            </li>
            <li>
              <h5>제 9조. 개인정보의 안전성 확보 조치</h5>
              <p>
                물류창고업 화재안전정보시스템은 개인정보보호법 제29조에 따라 다음과 같이 안전성
                확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
              </p>
              <ol>
                <li>
                  <em>① 개인정보 취급직원의 최소화 및 교육</em>개인정보를 취급하는 직원은 반드시
                  필요한 인원에 한하여 지정 · 관리하고 있으며 취급직원을 대상으로 안전한 관리를 위한
                  교육을 실시하고 있습니다.
                </li>
                <li>
                  <em>② 개인정보에 대한 접근 제한</em>개인정보를 처리하는 데이터베이스시스템에 대한
                  접근권한의 부여 · 변경 · 말소를 통하여 개인정보에 대한 접근통제를 위한 필요한
                  조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제 하고
                  있습니다.
                </li>
                <li>
                  <em>③ 접속기록의 보관</em>개인정보처리시스템에 접속한 기록을 최소 1년 이상
                  보관하고 있습니다.
                </li>
                <li>
                  <em>④ 개인정보의 암호화개인정보는 암호화</em> 등을 통해 안전하게 저장 및 관리되고
                  있습니다. 또한 중요한 데이터는 저장 및 전송 시 암호화하여 사용하는 등의 별도
                  보안기능을 사용하고 있습니다.
                </li>
                <li>
                  <em>⑤ 보안프로그램 설치 및 주기적 점검 · 갱신</em>해킹이나 컴퓨터 바이러스 등에
                  의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기 적으로 갱신
                  · 점검하고 있습니다.
                </li>
                <li>
                  <em>⑥ 비인가자에 대한 출입 통제</em>개인정보를 보관하고 있는 개인정보시스템의
                  물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.
                </li>
                <li>
                  <em>⑦ 정기적인 자체 점검 실시</em>개인정보 처리 관련 안전성 확보를 위해 정기적으로
                  개인정보 보호관리 점검을 실시하고 있습니다.
                </li>
                <li>
                  <em>⑧ 내부관리계획의 수립 및 시행</em>개인정보의 안전한 처리를 위하여
                  내부관리계획을 수립하고 시행하고 있습니다.
                </li>
              </ol>
            </li>
            <li>
              <h5>제 10조. 정보주체의 권익침해에 대한 구제 방법</h5>
              <p>
                개인정보주체는 개인정보침해로 인한 피해를 구제 받기 위하여 개인정보 분쟁조정위원회,
                한국인터넷진흥원 개인정보 침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수
                있습니다.
              </p>
              <ul class="grp">
                <li>☞ 개인정보 분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)</li>
                <li>☞ 개인정보 침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)</li>
                <li>☞ 대검찰청 사이버수사과 : (국번없이) 1301 (www.spo.go.kr)</li>
                <li>☞ 경찰청 사이버안전국 : (국번없이) 182 (cyberbureau.police.go.kr)</li>
              </ul>
              <p>
                또한, 개인정보의 열람, 정정 · 삭제, 처리정지 등에 대한 정보주체자의 요구에 대하여
                공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익을 침해 받은 자는
                행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.☞ 행정심판에 대한 자세한
                사항은 중앙행정심판위원회(http://www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.
              </p>
            </li>
            <li>
              <h5>제 11조. 개인정보의 열람청구를 접수 · 처리하는 부서</h5>
              <ol>
                <li>
                  ① 정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 할 수 있으며,
                  해당부서 및 담당자는 아래와 같습니다.
                  <p class="grp">
                    <em>※ 회원정보</em>- 개인정보의 열람청구 접수·처리 부서 : 국토교통부
                    첨단물류과<br />- 개인정보의 열람청구 접수·처리 담당자 : 국토교통부 첨단물류과
                    김태형<br />- 연락처 : 044-201-4012<br />- 메일 : thkim0528@korea.kr
                  </p>
                </li>
                <li>
                  ② 정보주체는 제1항의 열람청구 방법 외, 개인정보보호위원회의
                  ‘개인정보보호포털’(www.privacy.go.kr)을 통하여 개인정보 열람청구를 할 수 있습니다.
                  <p>
                    <em>※ 회원정보</em>- 개인정보보호위원회 ‘개인정보보호포털’ → 개인정보 민원 →
                    개인정보 열람 등 요구
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <h5>제 12조. 개인정보 보호책임자 및 담당자 연락처</h5>
              <p>개인정보보호법 제31조 제1항에 따른 개인정보보호책임자는 다음과 같습니다.</p>
              <p class="grp">
                <em>※ 회원정보</em>1. 개인정보보호 책임자 : 국토교통부 첨단물류과장<br />2.
                개인정보보호 담당자 : 국토교통부 첨단물류과 김태형<br />- 연락처 : 044-201-4012<br />-
                메일 : thkim0528@korea.kr
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div class="modal-actions">
        <button @click="handleConfirm" class="confirm-button">확인</button>
        <button @click="handleConfirm" class="exit-button">닫기</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

defineProps({
  visible: Boolean,
})

const emits = defineEmits(['close'])

const handleConfirm = () => {
  emits('close') // 모달 닫기 + 외부에서 처리
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: #fff;
  max-height: 90vh;
  overflow-y: auto;
  width: 80%;
  max-width: 800px;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.modal-body {
  margin-top: 1rem;
}

.modal-body .desc {
  font-size: 0.95rem;
  line-height: 1.6;
}

.modal-body .desc ol {
  margin-left: 1rem;
}

.modal-body .desc ol.grp,
.modal-body .desc ul.grp {
  margin-top: 0.5rem;
  margin-left: 1.5rem;
}

.modal-body .desc p.grp {
  margin-left: 1rem;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}

.confirm-button {
  margin: 1rem 0 1rem 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.confirm-button:hover {
  background-color: var(--primary-dark);
}

.exit-button {
  margin: 1rem 0 1rem 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.exit-button:hover {
  background-color: var(--error-color);
}
</style>
