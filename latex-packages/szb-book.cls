% TeX format requirement
\NeedsTeXFormat{LaTeX2e}

% Package name [\documentclass{szb-book}]
\ProvidesClass{szb-book}

% Class options
\RequirePackage{kvoptions}
\RequirePackage{etoolbox}

\SetupKeyvalOptions{family=szbook,prefix=szbook@@}

\DeclareBoolOption[false]{debug}
\DeclareStringOption[b5]{pagesize}
\ProcessKeyvalOptions*

% Forward unknown options to scrbook
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{scrbook}}
\ProcessOptions\relax

\newif\ifszbook@@bfive
\ifdefstring{\szbook@@pagesize}{b5}{\szbook@@bfivetrue}{\szbook@@bfivefalse}
\newif\ifszbook@@afour
\ifdefstring{\szbook@@pagesize}{a4}{\szbook@@afourtrue}{\szbook@@afourfalse}

\ifszbook@@bfive
  \def\szbook@@papersize{b5paper}%
  \def\szbook@@fontsize{10pt}%
  \def\szbook@@innermargin{15mm}%
  \def\szbook@@outermargin{25mm}%
  \def\szbook@@topmargin{20mm}%
  \def\szbook@@bottommargin{20mm}%
  \def\szbook@@footskip{12mm}%
  \PassOptionsToClass{b5paper,10pt}{scrbook}%
\else
  \ifszbook@@afour
    \def\szbook@@papersize{a4paper}%
    \def\szbook@@fontsize{12pt}%
    \def\szbook@@innermargin{20mm}%
    \def\szbook@@outermargin{30mm}%
    \def\szbook@@topmargin{25mm}%
    \def\szbook@@bottommargin{25mm}%
    \PassOptionsToClass{a4paper,12pt}{scrbook}%
  \else
    % \ClassError{szb-book}{Invalid pagesize '\szbook@@pagesize'. Allowed: a4 or b5}{}%
  \fi
\fi

% Base
\LoadClass{scrbook}

% Font
\RequirePackage{szb-font}

% Lang
\PassOptionsToPackage{magyar}{babel}
\RequirePackage{babel}

\ifszbook@@debug
  \RequirePackage{showframe}
\fi

% Page style
\RequirePackage[
  inner=\szbook@@innermargin,
  outer=\szbook@@outermargin,
  top=\szbook@@topmargin,
  bottom=\szbook@@bottommargin,
  footskip=\szbook@@footskip,
]{geometry}

\RequirePackage[
  headsepline=1mm:\textwidth,
  footsepline=1mm:\textwidth,
  olines,
]{scrlayer-scrpage}

% Extra packages
\RequirePackage{marginnote}
\RequirePackage{ifoddpage}
\RequirePackage{colortbl}
\RequirePackage{makecell}
\RequirePackage{qrcode}
\RequirePackage[export]{adjustbox}
\RequirePackage{etoc}

% Core
\RequirePackage{szb-util}
\RequirePackage{szb-color}
\RequirePackage{szb-graphics}
\RequirePackage{szb-math}
\RequirePackage[etoc]{szb-env}

\setlength\parindent{0pt}
\setlength\parskip{.33em}

\renewcommand*\chapterformat{%
  \scalebox{2}{\thechapter}\quad%
}
\addtokomafont{disposition}{\color{primaryColor}}
\renewcommand{\chapterlinesformat}[3]{%
  \parbox{\linewidth}{%
    \@hangfrom{#2}#3%
    \rule{\linewidth}{2pt}%
    % \newpagecolor{red!3}\afterpage{\restorepagecolor}%
  }%
}

\newcommand{\chaptertoc}[1][A fejezetben érintett témakörök]{%
  \etocsetnexttocdepth{section}%
  \etocsettocstyle{\addsec*{#1}}{}%
  \localtableofcontents%
}

\newcommand{\mainChapter}[1]{%
  \chapter{#1}%
  \addcontentsline{the}{chapter}{\protect\numberline{\thechapter}#1}%
  \addcontentsline{def}{chapter}{\protect\numberline{\thechapter}#1}%
  \thispagestyle{empty}%
}

\endinput