import s from './CatalogCard.module.css';
export function CatalogCard() {
    return (
        <article className={s.card}>
            <div className={s.imageWrap}>
                <img
                    src="https://avatars.mds.yandex.net/i?id=8152cebb5e3b15fc0e1362a22155cff9dae378c5-5344552-images-thumbs&n=13"
                    alt="Товар 2"
                    className={s.image}
                    loading="lazy"
                />
            </div>
            <div className={s.body}>
                <h3 className={s.name}>Название товара</h3>
                <p className={s.desc}>Короткое описание в одну строку</p>
                <div className={s.footer}>
                    <span className={s.price}>2 490 ₽</span>
                    <button className={s.buy} type="button">
                        Купить
                    </button>
                </div>
            </div>
        </article>

    )
}