# TZ_Employcity
Документация UI-Kit для проекта TZ_Employcity.

## Breakpoints
В проекте доступно 5 миксинов для медиа-запросов:

```
{
  "sm": {
    "width": "576px"
  },
  "md": {
    "width": "768px"
  },
  "lg": {
    "width": "992px"
  },
  "xl": {
    "width": "1212px"
  },
  "xxl": {
    "width": "1600px"
  }
}
```

Применение медиа-запросов:

<table class="table" style="width: 100%">
  <thead>
  <tr>
    <th>Mixin</th>
    <th>Description</th>
  </tr>
  </thead>
  <tbody>
  
<tr>
<td><code>@include sm;</code></td>
<td><code>@media (min-width: 576px) { ... }</code></td>
</tr>

<tr>
<td><code>@include md;</code></td>
<td><code>@media (min-width: 768px) { ... }</code></td>
</tr>

<tr>
<td><code>@include lg;</code></td>
<td><code>@media (min-width: 992px) { ... }</code></td>
</tr>

<tr>
<td><code>@include xl;</code></td>
<td><code>@media (min-width: 1212px) { ... }</code></td>
</tr>

<tr>
<td><code>@include xxl;</code></td>
<td><code>@media (min-width: 1600px) { ... }</code></td>
</tr>

  </tbody>
</table>

## Grid
```
@include grid(parameters);
```

Parameters:

* `$columns-sm` - количество колонок на медиа-запросе `sm`.
* `$columns-md` - количество колонок на медиа-запросе `md`.
* `$columns-lg` - количество колонок на медиа-запросе `lg`.
* `$columns-xl` - количество колонок на медиа-запросе `xl`.
* `$columns-xxl` - количество колонок на медиа-запросе `xxl`.

## Themes
Всего тем в проекте: 1.

### Default

CSS переменные темы `theme-default`:

```
--colors-text-white: #ffffff;
--colors-text-black: #000000;
--colors-text-gray: #BBBBBB;
--colors-text-light-gray: #C3C3C3;
--colors-text-deep-gray: #272733;
--colors-text-blue: #3E9CDC;
--colors-text-deep-blue: #43ABF0;
--colors-text-select-blue: #42A9ED;
--colors-background-white: #ffffff;
--colors-background-black: #000000;
--colors-background-gray: #3D4050;
--colors-background-deep-gray: #272733;
--colors-background-light-gray: #C4C4C4;
--colors-background-blue: #3E9CDC;
--colors-background-deep-blue: #286690;
--colors-background-header-gray: #10101D;

```

## Utilities
Набор утилитарных CSS переменных.

### Fonts
Объект `fonts` содержит следующие миксины:

#### Fonts Family
```
@include fonts-family;
```

CSS переменные миксина `fonts-family`:

```
--fonts-family-lato: Lato;

```
#### Fonts Size
```
@include fonts-size;
```

CSS переменные миксина `fonts-size`:

```
--fonts-size-h1: clamp(30px, 5vw, 48px);
--fonts-size-h2: clamp(24px, 4vw, 36px);
--fonts-size-t1: clamp(18px, 3vw, 20px);
--fonts-size-t2: clamp(17px, 2.5vw, 18px);
--fonts-size-t3: clamp(16px, 2vw, 16px);
--fonts-size-t4: 13px;

```
#### Fonts Weight
```
@include fonts-weight;
```

CSS переменные миксина `fonts-weight`:

```
--fonts-weight-h1: 700;
--fonts-weight-h2: 900;
--fonts-weight-t1: 700;
--fonts-weight-t2: 400;
--fonts-weight-t3: 400;
--fonts-weight-t4: 600;

```
#### Fonts Height
```
@include fonts-height;
```

CSS переменные миксина `fonts-height`:

```
--fonts-height-h1: clamp(34px, 5vw, 52px);
--fonts-height-h2: clamp(28px, 4vw, 40px);
--fonts-height-t1: clamp(20px, 3vw, 24px);
--fonts-height-t2: clamp(18px, 2.5vw, 20px);
--fonts-height-t3: clamp(16px, 2vw, 16px);
--fonts-height-t4: clamp(14px, 1.5vw, 14px);

```
### Indents
Объект `indents` содержит следующие миксины:

#### Indents
```
@include indents;
```

CSS переменные миксина `indents`:

```
--indents-200: 5px;

```
### Transition
Объект `transition` содержит следующие миксины:

#### Transition Time
```
@include transition-time;
```

CSS переменные миксина `transition-time`:

```
--transition-time-10: 0.1s;
--transition-time-20: 0.2s;
--transition-time-30: 0.3s;

```
#### Transition Easing
```
@include transition-easing;
```

CSS переменные миксина `transition-easing`:

```
--transition-easing-linear: linear;
--transition-easing-ease: ease;
--transition-easing-easeinout: ease-in-out;
--transition-easing-cubicin: cubic-bezier(0.5, 0, 0, 1);
--transition-easing-cubicout: cubic-bezier(0.5, 0, 0.5, 1);

```
### Radius
Объект `radius` содержит следующие миксины:

#### Radius
```
@include radius;
```

CSS переменные миксина `radius`:

```
--radius-3: 3px;
--radius-4: 4px;
--radius-5: 5px;
--radius-50percent: 50%;
--radius-rounded: 99em;

```
### Shadow
Объект `shadow` содержит следующие миксины:

#### Shadow
```
@include shadow;
```

CSS переменные миксина `shadow`:

```
--shadow-default: 30px 10px 30px 0px rgba(0, 0, 0, 0.25);

```
### Blur
Объект `blur` содержит следующие миксины:

#### Blur
```
@include blur;
```

CSS переменные миксина `blur`:

```
--blur-0: blur(0px);

```
