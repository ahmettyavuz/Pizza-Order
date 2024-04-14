import { FormGroup, Input, Label } from "reactstrap";
import "./orderpizza.css";

export default function OrderPizza() {
  return (
    <>
      <div>
        <header className="header">
          <img
            src="../../Assets/mile1-assets/logo.svg"
            alt="Teknolojik yemekler"
          />
          <nav>
            <a href="/">Anasayfa</a>-<a href="/">Seçenekler</a>-
            <a href="/">Sipariş Oluştur</a>
          </nav>
        </header>
        <div>
          <p>Position Absolute Acı Pizza</p>
          <p>84.50</p>
          <p>4.9</p>
          <p>(200)</p>
          <FormGroup tag="fieldset">
            <legend>Radio Buttons</legend>
            <FormGroup check>
              <Input name="radio1" type="radio" />{" "}
              <Label check>
                Option one is this and that—be sure to include why it‘s great
              </Label>
            </FormGroup>
          </FormGroup>
          <p></p>
        </div>
      </div>
    </>
  );
}
