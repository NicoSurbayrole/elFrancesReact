import styles from "./Loading.module.css";

const Loading = ({
  text = "Cargando...",
  variant = "spinner",
  fullscreen = false,
  size = 40,
  className = "",
  ariaLabel = "Cargando"
}) => {
  const rootClass = [
    styles.container,
    fullscreen ? styles.fullscreen : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={rootClass}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={ariaLabel}
    >
      <div
        className={variant === "dots" ? styles.dots : styles.spinner}
        style={{ "--size": `${size}px` }}
      >
        {variant === "dots" && (
          <>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </>
        )}
      </div>

      {text && <p className={styles.text}>{text}</p>}

      {/* Oculto para lectores de pantalla con progreso genérico */}
      <span className={styles.srOnly}>Cargando contenido…</span>
    </div>
  );
};

export default Loading;
