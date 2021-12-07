import logo from "./logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="main">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <div className="nome">
          <h2>
            Fabrizio <span> </span> Cottone
          </h2>
        </div>
      </header>
      <div className="description">
        <h3>Descrizione</h3>
        <p className="descriptionP">
          "But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure?"
        </p>
      </div>
      <div className="experience">
        <div className="WorkingExp">
          <h3>Esperienze Lavorative</h3>
        </div>
        <div className="Lang">
          <h3>Lingue</h3>
        </div>
        <div className="Hobby">
          <h3>Hobby</h3>
        </div>
        <div className="WorkingTXT">
        <p>
          "But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial pleasure?"
          </p>
        </div>
        <div className="LangTXT">
          Italiano <br /> Inglese
        </div>
        <div className="HobbyTXT">
        <p>
          "At vero eos et accusamus et ius et quas molestias excepturi a animi,
          id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
          expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
          optio cumque nihil impedit quo minus id quod maxime placeat facere
          possimus, omnis voluptas assumenda est, omnis dolor repellendus.
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat."
          </p>
        </div>
      </div>
      <div className="Contact">
        <form className="Form">
          <h3 className="ContactMe">Contact Me</h3>
          <label for="ContactObj">Oggetto</label>
          <input type="text" className="Obj"></input>
          <label for="ContactMsg">Messaggio</label>
          <textarea className="TextArea"></textarea>
        </form>
      </div>
      <footer>
       <h3 Class="text" className="Email">fabrizio.cottone@fakemail.it</h3>
      </footer>
    </div>
  );
}

export default App;
