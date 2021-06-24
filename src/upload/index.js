import {Form, Divider, Input, InputNumber, Button} from 'antd'
import "./index.css"

function UploadPage() {
  const onSubmit = (values) => { //람다식, form안에 입력한 값들이 values로 들어감 
    console.log(values);
  };

  return (
    <div id = "upload-container">
      <Form name = "상품 업로드" onFinish ={onSubmit}>
        <Form.Item name ="upload"
        label={<div className= "upload-label"> 이미지</div>}>
           {/* Form은 Form.item으로 부터 데이터를 관리함, name(필수 속성)은 onfinish에 들어가는 vauleㄴ의 key 값
           => form.item의 속성 name=> key, input한 내용 => values로 들어감 */}
          <div id = "upload-img-placeholder"> {/* 일단 pass 서버 개발때 더 자세히 */}
            <img src="/images/icons/camera.png" />
            <span>이미지를 업로드 해주세요.</span>
          </div>
        </Form.Item>
        <Divider /> {/* divider은 선을 그어줌 */}
        <Form.Item 
         label={<div className= "upload-label"> 판매자 명 </div>}
         name ="seller"
         rules={[
           { required: true, message: "판매자 이름을 입력해 주세요"}]}> 
           {/*rule은 '{' 속에 배열 속 객채 형태로 넣어야함 + require => input이 꼭 입력되어야 하는가, message => 입력 안됐을 때의 메세지*/ }
           <Input className="upload-name" size = "large" placeholder = "이름을 입력해 주세요."/> 
           {/*placeholder은 input에 입력하기 전 보이는 화면*/}
        </Form.Item>
        <Divider/>
        <Form.Item label={
        <div className= "upload-label"> 상품 이름</div>}
           name ="name"
           rules={[
             {required: true, message: "상품 이름을 입력해 주세요"}]}>
           <Input className="upload-name" size = "large" placeholder = "상품이름을 입력해 주세요."/>
        </Form.Item>
        <Divider />
        <Form.Item label={
        <div className= "upload-label"> 상품 가격</div>}
           name ="price"
           rules={[
             {required: true, message: "상품 가격을 입력해 주세요"}]}>
               <InputNumber defaultValue={0} className="upload-price" size ="large" />
             </Form.Item>
        <Divider />
        <Form.Item
          name ="description"
          label = {<div className= "upload-label">상품 소개</div>}
          rules ={[
            {required: true, message: "상품 소개를 입력해주세요"}]}
        >
          <Input.TextArea size="large" id="product-description"
          showCount= {true} maxLength = {300} placeholder = "상품 소개를 적어주세요"/>
        </Form.Item>
        <Form.Item>
          <Button id= "submmit-button" size="large" htmlType="submit"> {/*htmlType을 submit이라 해야 제출할떄 사용하는 타입이다라고 인식함*/ } 
          문제 등록하기
          </Button> {/*이때 전송 버튼을 눌렀을때 form안 rule 충족된지 체크하고 전송함*/}
        </Form.Item>
      </Form>
    </div>
    
  );
}

export default UploadPage;