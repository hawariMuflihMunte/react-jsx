import { ButtonSave } from "../components/ButtonSave";

export function NewNote() {
  return (
    <section className='add-new-page'>
      <div className='add-new-page__input'>
        <input
          type='text'
          className='add-new-page__input__title'
          placeholder='Catatan rahasia'
        />
        <div
          className='add-new-page__input__body'
          data-placeholder='Sebenarnya saya adalah ....'
          spellCheck='false'
          contentEditable='true'
        ></div>
      </div>
      <div className='add-new-page__action'>
        <ButtonSave />
      </div>
    </section>
  )
};
