
console.log('start foo LOGGLY_TOKEN=%s', process.env.LOGGLY_TOKEN)
exports.handle = function(e, ctx) {
  console.log('processing event: %j', e)
  ctx.succeed({ hello: 'foo' })
}
