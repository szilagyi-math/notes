% TeX format requirement
\NeedsTeXFormat{LaTeX2e}

% Package name [\documentclass{szb-practice}]
\ProvidesClass{szb-practice}

% Base
\PassOptionsToClass{a4paper, 12pt}{scrartcl}
\LoadClass{scrartcl}

% Font
\RequirePackage{szb-font}

% Lang
\PassOptionsToPackage{magyar}{babel}
\RequirePackage{babel}

% Core
\RequirePackage{szb-util}
\RequirePackage{szb-color}
\RequirePackage{szb-graphics}
\RequirePackage{szb-math}
\RequirePackage{szb-env}

% Page style
\RequirePackage[
  margin=25mm,
  footskip=15mm,
  % showframe,
]{geometry}

\RequirePackage[
  headsepline=1mm:\textwidth,
  footsepline=1mm:\textwidth,
  olines,
]{scrlayer-scrpage}

\addtokomafont{disposition}{\color{primaryColor}}
\pagestyle{scrheadings}
\setkomafont{pageheadfoot}{\sffamily\color{gray}}
\ModifyLayer[addvoffset=-2mm]{scrheadings.foot.above.line}
\cfoot{\thepage\ / \pageref{LastPage}}
\chead{}
\ihead{\@subject (\@subjectCode)}
\ohead{\@area\ -- \@title}

% Length declarations and page layout
\setlength\parindent{0pt}
\setlength\parskip{.66em}

\newcommand{\area}[1]{\def\@area{#1}}
\newcommand{\docno}[1]{\def\@docno{#1}\setcounter{section}{#1}}
\renewcommand{\subject}[1]{\def\@subject{#1}}
\newcommand{\subjectCode}[1]{\def\@subjectCode{#1}}

% Title
\renewcommandx{\maketitle}[1][1=]{%
  \bgroup%
  \sffamily%
  \hspace*{.33em}
  \begin{tikzpicture}
    \node[fill=primaryColor, text=white, rounded corners=2mm, inner sep=3mm, scale=1.2, align=center] (docno) {%
      \Huge\bfseries\@docno\\[5mm]%
    };
    \node[text=primaryColor, anchor=north west, inner sep=3mm, scale=1.2, align=left] at ($(docno.north east)+(5mm,0)$) (title) {%
      \hspace*{-3mm}\Large\bfseries\@title\hspace*{-3mm}\\[-1.05em]%
    };
    \node[text=gray, anchor=south west, inner sep=0, align=left] at ($(docno.south east)+(5mm,1.5mm)$) (rest) {%
      \bfseries\@subject\ -- \@area\\[1mm]
      \bfseries\@date%
    };
    \draw[gray, ultra thick] ($(rest.south west)-(0,1.0mm)$) -- ($(rest.south east)-(0,1.0mm)$);
    \draw[gray, ultra thick] ($(rest.north west)+(0,1.5mm)$) -- ($(rest.north east)+(0,1.5mm)$);
  \end{tikzpicture}
  \egroup%
}
