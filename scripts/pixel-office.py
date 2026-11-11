#!/usr/bin/env python3
"""Dibuja public/pixel-office.png: una oficina noventera en pixel art 2.5D (proyección oblicua).

Uso: python3 scripts/pixel-office.py   (requiere Pillow)
La imagen se pinta a 368x84 px y la web la amplía con image-rendering: pixelated.
"""
from pathlib import Path
from PIL import Image, ImageDraw

W, H, FLOOR = 368, 84, 52
DX, DY = 6, 4  # desplazamiento de profundidad
OUT = Path(__file__).resolve().parent.parent / "public" / "pixel-office.png"

img = Image.new("RGB", (W, H), "#33415f")
d = ImageDraw.Draw(img)
INK = "#10131f"


def shade(c, f):
    c = c.lstrip("#")
    r, g, b = (int(c[i : i + 2], 16) for i in (0, 2, 4))
    return "#%02x%02x%02x" % tuple(max(0, min(255, int(v * f))) for v in (r, g, b))


def box(x, y, w, h, color, depth=1.0):
    """Caja con cara frontal en (x, y-h)-(x+w, y), techo y costado derecho."""
    dx, dy = int(DX * depth), int(DY * depth)
    d.polygon([(x, y - h), (x + dx, y - h - dy), (x + w + dx, y - h - dy), (x + w, y - h)], fill=shade(color, 1.25), outline=INK)
    d.polygon([(x + w, y - h), (x + w + dx, y - h - dy), (x + w + dx, y - dy), (x + w, y)], fill=shade(color, 0.7), outline=INK)
    d.rectangle([x, y - h, x + w, y], fill=color, outline=INK)


def px(x, y, c):
    d.point((x, y), fill=c)


# Pared, zócalo y suelo de baldosas.
d.rectangle([0, 0, W, FLOOR - 1], fill="#33415f")
for x in range(0, W, 2):
    for y in range(0, FLOOR, 2):
        if (x // 2 + y // 2) % 9 == 0:
            px(x, y, "#3a4a6b")
d.rectangle([0, FLOOR - 3, W, FLOOR - 1], fill="#1f2942")
for row in range(4):
    y0, y1 = FLOOR + row * 8, FLOOR + row * 8 + 8
    for col in range(-2, 26):
        x0 = col * 16 + row * 8
        c = "#8791a8" if (col + row) % 2 else "#737d95"
        d.polygon([(x0 + 8, y0), (x0 + 24, y0), (x0 + 16, y1), (x0, y1)], fill=c)
d.line([0, FLOOR, W, FLOOR], fill=INK)

# Ventanal con la ciudad de noche.
for wx in (76, 232):
    d.rectangle([wx, 6, wx + 64, 38], fill="#0b1230", outline=INK)
    for i, (bx, bh) in enumerate([(3, 14), (11, 22), (20, 10), (27, 26), (38, 17), (46, 12), (53, 20)]):
        d.rectangle([wx + bx, 38 - bh, wx + bx + 7, 37], fill="#1b2550")
        for ly in range(38 - bh + 2, 36, 3):
            for lx in (1, 4):
                if (lx + ly + i) % 4:
                    px(wx + bx + lx, ly, "#f2c94c")
    px(wx + 8, 10, "#ffffff"); px(wx + 44, 9, "#ffffff"); px(wx + 58, 13, "#ffffff")
    d.line([wx + 32, 6, wx + 32, 38], fill="#c3c7cb")
    d.line([wx, 22, wx + 64, 22], fill="#c3c7cb")
    d.rectangle([wx - 2, 38, wx + 66, 40], fill="#c3c7cb", outline=INK)

# Pizarra con gráfico, diploma y reloj.
d.rectangle([160, 8, 204, 34], fill="#eef1f4", outline=INK)
for i, bh in enumerate((6, 10, 8, 15, 19)):
    d.rectangle([165 + i * 7, 30 - bh, 169 + i * 7, 30], fill=("#000080", "#008080", "#000080", "#008080", "#b8860b")[i])
d.line([164, 26, 172, 20, 180, 22, 188, 14, 200, 11], fill="#c0392b")
d.rectangle([318, 12, 336, 26], fill="#f2efe6", outline="#b8860b")
d.line([322, 16, 332, 16], fill=INK); d.line([322, 19, 332, 19], fill="#8a8f98"); px(327, 23, "#c0392b")
d.ellipse([22, 8, 36, 22], fill="#f2efe6", outline=INK)
d.line([29, 15, 29, 10], fill=INK); d.line([29, 15, 33, 15], fill="#c0392b")


def plant(x, y):
    box(x, y, 10, 8, "#a0522d", 0.6)
    for ox, oy, r in ((5, -22, 6), (0, -17, 5), (10, -17, 5), (5, -13, 5)):
        d.ellipse([x + ox - r, y + oy - r, x + ox + r, y + oy + r], fill="#2e8b57", outline=INK)
    for ox, oy in ((3, -24), (8, -19), (1, -16), (10, -14)):
        px(x + ox, y + oy, "#7bd389")


def cabinet(x, y):
    box(x, y, 22, 40, "#9aa1ab")
    for i in range(4):
        d.rectangle([x + 2, y - 38 + i * 10, x + 20, y - 31 + i * 10], outline=INK)
        d.line([x + 8, y - 34 + i * 10, x + 14, y - 34 + i * 10], fill="#f2efe6")


def rack(x, y):
    box(x, y, 26, 58, "#2b2f3a")
    for i in range(9):
        yy = y - 54 + i * 6
        d.rectangle([x + 3, yy, x + 23, yy + 3], fill="#12141b")
        px(x + 5, yy + 1, "#39ff14" if i % 3 else "#ffb000")
        px(x + 8, yy + 1, "#39ff14")
        d.line([x + 12, yy + 2, x + 21, yy + 2], fill="#3b4252")


def desk(x, y, w, screen, executive=False):
    wood = "#6b3f1d" if executive else "#8b5a2b"
    box(x + 2, y, 4, 18, shade(wood, 0.8), 1.6)          # patas
    box(x + w - 6, y, 4, 18, shade(wood, 0.8), 1.6)
    box(x + w - 30, y, 14, 16, "#d8d2bd", 1.2)           # torre
    px(x + w - 26, y - 12, "#39ff14"); d.line([x + w - 27, y - 8, x + w - 19, y - 8], fill=INK)
    box(x, y - 18, w, 3, wood, 1.8)                       # tablero
    mx, my = x + 12, y - 25
    box(mx + 6, my + 1, 10, 3, "#b9b39d", 0.8)            # base del monitor
    box(mx, my - 2, 24, 20, "#d8d2bd", 1.3)               # monitor CRT
    d.rectangle([mx + 3, my - 19, mx + 21, my - 6], fill=screen, outline=INK)
    if executive:
        for i, bh in enumerate((3, 6, 5, 9)):
            d.rectangle([mx + 6 + i * 4, my - 8 - bh, mx + 8 + i * 4, my - 8], fill="#f2c94c")
    else:
        for i, ln in enumerate((12, 8, 14, 6)):
            d.line([mx + 5, my - 17 + i * 3, mx + 5 + ln, my - 17 + i * 3], fill="#39ff14")
    px(mx + 20, my - 4, "#39ff14")
    box(mx + 30, my + 1, 18, 2, "#e6e1cf", 0.9)           # teclado
    box(x + w - 14, my + 1, 4, 5, "#f2efe6", 0.5)         # taza
    if executive:
        d.line([x + w - 24, my, x + w - 24, my - 12, x + w - 30, my - 16], fill="#b8860b")  # lámpara
        d.polygon([(x + w - 34, my - 14), (x + w - 28, my - 19), (x + w - 26, my - 15)], fill="#f2c94c", outline=INK)
        box(x - 16, y + 8, 14, 10, "#4a2c17", 0.7)        # maletín
        d.rectangle([x - 12, y - 5, x - 6, y - 3], outline=INK); px(x - 9, y + 3, "#f2c94c")
    cx = x + 22                                           # silla
    box(cx + 2, y + 10, 12, 20, "#7a1f2b" if executive else "#2f4f6f", 0.5)
    box(cx, y + 12, 16, 4, "#5c1721" if executive else "#243d57", 1.2)
    d.line([cx + 8, y + 12, cx + 8, y + 17], fill=INK); d.line([cx + 3, y + 18, cx + 14, y + 18], fill=INK)


def cooler(x, y):
    box(x, y, 12, 22, "#e6e9ee", 0.8)
    box(x + 2, y - 22, 8, 12, "#7fd3f7", 0.6)
    px(x + 4, y - 14, "#c0392b"); px(x + 8, y - 14, "#000080")


cabinet(10, 62)
plant(40, 60)
desk(64, 62, 72, "#06140a")
rack(152, 64)
desk(202, 62, 84, "#000080", executive=True)
cooler(300, 62)
plant(326, 60)
cabinet(344, 62)

img.save(OUT)
print("escrito", OUT, img.size)
