(function ($) {
  $.fn.extend({
    open() {
      $('.js-tab').on('click', event => {
        const self = $(event.currentTarget)
        const tabParent = self.closest('.js-tab-section')
        const tabPanel = tabParent.children('.js-tab-panel')
        const selectId = self.attr('data-tab')
        tabParent.children('.js-tab-panel')
          .hide()
        self.addClass('is-active')
        tabPanel.each((index, element) => {
          if ($(element).attr('data-tab') === selectId)
            $(element).fadeIn(100)
        })
      })
    },
    tab() {
      $('.js-tab-section').each((index, element) => {
        const ele = $(element)
        ele.find('.js-tab')
          .each((id, tab) => {
            $(tab).attr('data-tab', id)
          })
        ele.children('.js-tab-panel')
          .each((id, tabPanel) => {
            $(tabPanel).attr('data-tab', id)
              .hide()
          })
          .eq(0)
          .show()
      })
      this.open()
    }
  })
}(jQuery))
$('body').tab()