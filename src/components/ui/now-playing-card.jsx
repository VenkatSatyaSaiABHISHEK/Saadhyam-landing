import React, { isValidElement, useEffect, useState } from "react";
import {
  animate,
  motion,
  useAnimationFrame,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";

// Seconds per full turn of the disc.
const SPIN_PERIOD = 8;
const MORPH = { type: "spring", duration: 0.5, bounce: 0.15 };
// Opening keeps the art round while it turns upright (a spinning circle hides the turn),
// then squares off. Closing rounds it quickly so it reads as a disc again.
const RADIUS_OPEN = { duration: 0.5, ease: [0.77, 0, 0.175, 1] };
const RADIUS_CLOSE = { duration: 0.3, ease: [0.23, 1, 0.32, 1] };

export function NowPlayingCard({
  title,
  artist,
  subtitle,
  cover,
  duration = 146,
  defaultElapsed = 75,
  playing,
  defaultPlaying = true,
  accent = "#ec4899",
  className = "",
  style = {},
  onCardClick,
  hoverIcon,
  showHoverBadge = true,
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const isPlaying = playing ?? defaultPlaying;
  const elapsed = useElapsed(duration, defaultElapsed, isPlaying);

  // Hover opens the cover for mouse users; a click or tap pins it open or closed.
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const expanded = hovered || pinned;

  // The disc's angle lives in a motion value so spinning never re-renders React.
  const rotate = useMotionValue(0);
  const discTransform = useMotionTemplate`rotate(${rotate}deg)`;

  useAnimationFrame((_, delta) => {
    if (expanded || !isPlaying || reduceMotion) return;
    rotate.set((rotate.get() + (delta / 1000) * (360 / SPIN_PERIOD)) % 360);
  });

  // Opening settles the art upright along the shorter way round.
  useEffect(() => {
    if (!expanded) return;
    const angle = rotate.get();
    const controls = animate(
      rotate,
      angle > 180 ? 360 : 0,
      reduceMotion ? { duration: 0 } : MORPH
    );
    return () => controls.stop();
  }, [expanded, reduceMotion, rotate]);

  const handleCardClick = (e) => {
    e.stopPropagation();
    if (onCardClick) {
      onCardClick();
    } else {
      setPinned((value) => !value);
    }
  };

  return (
    <section
      data-slot="now-playing-card"
      aria-label="Now playing"
      style={{
        "--now-playing-accent": accent,
        position: "relative",
        isolation: "isolate",
        aspectRatio: "1 / 1",
        width: "100%",
        maxWidth: "310px",
        overflow: "hidden",
        borderRadius: "2.5rem",
        background: "linear-gradient(180deg, #18181b 0%, #09090b 100%)",
        color: "#ffffff",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.12)",
        userSelect: "none",
        cursor: onCardClick ? "pointer" : "default",
        ...style,
      }}
      onPointerEnter={(event) =>
        event.pointerType === "mouse" && setHovered(true)
      }
      onPointerLeave={() => setHovered(false)}
      className={cn("now-playing-card-container", className)}
      {...props}
    >
      {/* The art is a full-card square. Collapsed, it shrinks into a circle centred on the
          top edge (a disc peeking in); expanded, it becomes the card. Transform + radius only. */}
      <motion.div
        aria-hidden
        initial={false}
        animate={
          expanded
            ? { transform: "translateY(0%) scale(1)", borderRadius: "0%" }
            : { transform: "translateY(-48%) scale(0.9)", borderRadius: "50%" }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { ...MORPH, borderRadius: expanded ? RADIUS_OPEN : RADIUS_CLOSE }
        }
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          overflow: "hidden",
          boxShadow: "0 24px 48px -16px rgba(0, 0, 0, 0.6)",
        }}
      >
        <motion.div
          style={{
            transform: discTransform,
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {cover}
        </motion.div>

        {/* Concentric vinyl groove rings overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            pointerEvents: "none",
            backgroundImage:
              "repeating-radial-gradient(circle at center, transparent 0, transparent 4px, rgba(255, 255, 255, 0.04) 5px, transparent 6px)",
            opacity: expanded ? 0.25 : 0.85,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* Centre hole of the disc; hides once the art opens up. */}
        <motion.span
          initial={false}
          animate={
            expanded
              ? { opacity: 0, transform: "translate(-50%, -50%) scale(0.6)" }
              : { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
          }
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "28%",
            height: "28%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "rgba(38, 38, 38, 0.95)",
            boxShadow: "0 0 0 4px rgba(82, 82, 82, 0.5), inset 0 2px 4px rgba(0,0,0,0.6)",
          }}
        >
          <span
            style={{
              width: "50%",
              height: "50%",
              borderRadius: "50%",
              background: "#09090b",
              boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.2)",
            }}
          />
        </motion.span>
      </motion.div>

      {/* Floating Interactive Hover Icon Badge (appears whenever mouse is there) */}
      <AnimatePresence>
        {hovered && showHoverBadge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -6 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              zIndex: 30,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 12px",
              borderRadius: "9999px",
              background: "rgba(15, 17, 26, 0.85)",
              backdropFilter: "blur(12px)",
              color: "#ffffff",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.02em",
              border: "1px solid rgba(236, 72, 153, 0.4)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(236, 72, 153, 0.25)",
              pointerEvents: "none",
            }}
          >
            {hoverIcon || (
              <>
                <Sparkles size={12} color="#f472b6" />
                <span>Meet Sarah</span>
                <ArrowUpRight size={12} color="#f472b6" />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card Info & Equalizer bottom deck */}
      <div
        style={{
          position: "absolute",
          insetInline: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          padding: "0 24px 30px 24px",
          textAlign: "center",
          zIndex: 5,
          pointerEvents: "none",
        }}
      >
        <Equalizer playing={isPlaying} accent={accent} />
        {artist && (
          <p
            style={{
              marginTop: "8px",
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#f472b6",
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {artist}
          </p>
        )}
        <h3
          style={{
            margin: 0,
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
        >
          {title}
        </h3>
        {subtitle && (
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              fontWeight: 400,
              color: "#a1a1aa",
            }}
          >
            {subtitle}
          </p>
        )}

        {/* Progress bar */}
        <div
          role="progressbar"
          aria-label="Playback position"
          aria-valuemin={0}
          aria-valuemax={duration}
          aria-valuenow={elapsed}
          aria-valuetext={`${formatTime(elapsed)} of ${formatTime(duration)}`}
          style={{
            marginTop: "6px",
            height: "4px",
            width: "56px",
            overflow: "hidden",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.15)",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              transformOrigin: "left",
              borderRadius: "9999px",
              backgroundColor: accent,
              transform: `scaleX(${elapsed / duration})`,
              transition: "transform 1000ms linear",
            }}
          />
        </div>
        <p
          aria-hidden
          style={{
            margin: 0,
            fontSize: "13px",
            fontWeight: 500,
            color: "#f4f4f5",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {formatTime(elapsed)}{" "}
          <span style={{ color: "#71717a" }}>/ {formatTime(duration)}</span>
        </p>
      </div>

      {/* A full-card button so tap and keyboard users can trigger action */}
      <button
        type="button"
        aria-pressed={pinned}
        aria-label={pinned ? "Hide album cover" : "Show album cover"}
        onClick={handleCardClick}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          cursor: "pointer",
          borderRadius: "2.5rem",
          background: "transparent",
          border: "none",
          outline: "none",
        }}
      />
    </section>
  );
}

// Four bars bouncing out of phase; frozen when paused or under reduced motion.
function Equalizer({ playing, accent = "#ec4899" }) {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-flex",
        height: "20px",
        alignItems: "center",
        gap: "3px",
      }}
    >
      {[0.9, 0.55, 1, 0.7].map((height, i) => (
        <span
          key={i}
          style={{
            width: "3px",
            height: `${height * 100}%`,
            borderRadius: "9999px",
            backgroundColor: accent,
            animation: playing
              ? "now-playing-bar 900ms ease-in-out infinite alternate"
              : "none",
            animationDelay: `${i * -220}ms`,
          }}
        />
      ))}
      <style>
        {`@keyframes now-playing-bar{from{transform:scaleY(.35)}to{transform:scaleY(1)}}`}
      </style>
    </span>
  );
}

// Ticks once a second while playing and loops at the end of the track.
function useElapsed(duration, start, playing) {
  const [elapsed, setElapsed] = useState(() => Math.min(start, duration));
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(
      () => setElapsed((value) => (value + 1) % (duration + 1)),
      1000
    );
    return () => clearInterval(timer);
  }, [playing, duration]);
  return elapsed;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
}
